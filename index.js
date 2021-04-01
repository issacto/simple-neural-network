const {tanh, tanh_prime} = require("./src/functions/activations")
const {mse, mse_prime} = require("./src/functions/losses")
const {ActivationLayer} = require("./src/layer/ACTLayer")
const {FCLayer} = require("./src/layer/FCLayer")
const {Network} = require("./src/network")
var nj = require('numjs');



x_train = [ nj.array([0,0]), nj.array([0,1]), nj.array([1,0]), nj.array([1,1]) ]
y_train = [nj.array([0]), nj.array([1]), nj.array([1]), nj.array([0])]

//network
net = new Network()
net.add(new FCLayer(2, 3))
net.add(new ActivationLayer(tanh, tanh_prime))
net.add(new FCLayer(3, 1))
net.add(new ActivationLayer(tanh, tanh_prime))

//train
net.use(mse, mse_prime)
net.fit(x_train, y_train, epochs=100, learning_rate=0.1)

//test
out = net.predict(x_train)
console.log("out")
console.log(out)


exports.printMsg = function(){
    console.log("HIHI")
}

