const {tanh, tanh_prime} = require("./src/functions/activations")
const {mse, mse_prime} = require("./src/functions/losses")
const {ActivationLayer} = require("./src/layer/activation_layer")
const {FCLayer} = require("./src/layer/fully_connected_layer")
const {Network} = require("./src/network")

var nj = require('numjs');


class NeuralNetwork{

    constructor(layersArray, bias_subtract_value = 0.5, weight_subtract_value = 0.5){
        this.net = new Network()
        for(var i =0 ; i<layersArray.length-1;i++){
            this.net.add(new FCLayer(layersArray[i], layersArray[i+1],bias_subtract_value,weight_subtract_value))
            this.net.add(new ActivationLayer(tanh, tanh_prime))
        }
    }

    train(xTrain, yTrain,epochs, learningRate){
        var x_train = []
        var y_train = []
        //numpjs convert
        for(var x of xTrain){
            x_train.push(nj.array([x]))
        }
        for(var y of yTrain){
            y_train.push(nj.array([[y]]))
        }
        //train
        this.net.use(mse, mse_prime)
        this.net.fit(x_train, y_train, epochs,learningRate)
    }

    getErrors(){
        return this.net.getErrors()
    }

    predict(input_data){
        return this.net.predict([input_data])[0][0]
    }

    getWeights(){
        return this.net.getWeights()
    }
}


exports.NeuralNetwork = NeuralNetwork