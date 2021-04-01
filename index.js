const {tanh, tanh_prime} = require("./src/functions/activations")
const {mse, mse_prime} = require("./src/functions/losses")
const {ActivationLayer} = require("./src/layer/ACTLayer")
const {FCLayer} = require("./src/layer/FCLayer")
const {Network} = require("./src/network")
var nj = require('numjs');


exports.printMsg = function(){
    console.log("HIHI",abc)
}


exports.run = function(X_train, Y_train,Epochs, Learning_rate){
    x_train = []
    y_train = []
    for(var x of X_train){
        x_train.push(nj.array(x))
    }
    for(var y of Y_train){
        
        y_train.push(nj.array(y))
    }
    //network
    net = new Network()
    net.add(new FCLayer(2, 3))
    net.add(new ActivationLayer(tanh, tanh_prime))
    net.add(new FCLayer(3, 1))
    net.add(new ActivationLayer(tanh, tanh_prime))

    //train
    net.use(mse, mse_prime)
    net.fit(x_train, y_train, Epochs,Learning_rate)
    console.log("FINISHED123")
    //test
    //out = net.predict(x_train)
    return net.predict(x_train)
    console.log("out")
    console.log(out)

}


