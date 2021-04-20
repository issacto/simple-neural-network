const {tanh, tanh_prime} = require("./src/functions/activations")
const {mse, mse_prime} = require("./src/functions/losses")
const {ActivationLayer} = require("./src/layer/activation_layer")
const {FCLayer} = require("./src/layer/fully_connected_layer")
const {Network} = require("./src/network")

var nj = require('numjs');
var net = null

//initialize
exports.initialize = function(layersArray){
    net = new Network()
    for(var i =0 ; i<layersArray.length-1;i++){
        net.add(new FCLayer(layersArray[i], layersArray[i+1]))
        net.add(new ActivationLayer(tanh, tanh_prime))
    }
    /*
    net.add(new FCLayer(3, 3))
    net.add(new ActivationLayer(tanh, tanh_prime))
    net.add(new FCLayer(3, 1))
    net.add(new ActivationLayer(tanh, tanh_prime))*/

}

//train
exports.train = function(X_train, Y_train,Epochs, Learning_rate){
    if(net == null){console.error("Error: Model has not been initialized");return null;}
    x_train = []
    y_train = []
    //numpjs convert
    for(var x of X_train){
        x_train.push(nj.array([x]))
    }
    for(var y of Y_train){
        y_train.push(nj.array([y]))
    }
    //train
    net.use(mse, mse_prime)
    net.fit(x_train, y_train, Epochs,Learning_rate)
}

//test
exports.predict = function(X_test){
    if(net == null){console.error("Error: Model has not been initialized");return null;}
    return net.predict([X_test])[0][0]
}

//get weights
exports.getWeights = function(X_test){
    if(net == null){console.error("Error: Model has not been initialized");return null;}
    return net.getWeights()
}

//get weights
exports.getErrors = function(X_test){
    if(net == null){console.error("Error: Model has not been initialized");return null;}
    return net.getErrors()
}





