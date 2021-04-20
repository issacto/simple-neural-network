const {tanh, tanh_prime} = require("./src/functions/activations")
const {mse, mse_prime} = require("./src/functions/losses")
const {ActivationLayer} = require("./src/layer/ACTLayer")
const {FCLayer} = require("./src/layer/FCLayer")
const {Network} = require("./src/network")

var nj = require('numjs');
var net = null


//Initialize
exports.initialize = function(){
    net = new Network()
    net.add(new FCLayer(3, 3))
    net.add(new ActivationLayer(tanh, tanh_prime))
    net.add(new FCLayer(3, 1))
    net.add(new ActivationLayer(tanh, tanh_prime))

}


//Train
exports.train = function(X_train, Y_train,Epochs, Learning_rate){
    if(net == null){return console.error("Error: Model has not been initialized");}
    x_train = []
    y_train = []
    //numpjs convert
    for(var x of X_train){
        x_train.push(nj.array(x))
    }
    for(var y of Y_train){
        y_train.push(nj.array(y))
    }
    //train
    net.use(mse, mse_prime)
    net.fit(x_train, y_train, Epochs,Learning_rate)
}

//test
exports.test = function(X_test){
    return net.predict(X_test)
}

module.exports.activeCount = new Map();
exports.get = function(){
    console.log("GET",module.exports.activeCount);
    return module.exports.activeCount[0].selection.data   
}




