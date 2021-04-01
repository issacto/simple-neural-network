const { layer } = require("./layer")
var nj = require('numjs');

class FCLayer extends layer{
    //input_size = number of input neurons
    //output_size = number of output neurons
    constructor(input_size,output_size ){
        super();
        this.weights = nj.random([input_size,output_size]).subtract(0.5)
        this.bias = nj.random([output_size]).subtract(0.5)
    }
    forward_propagation(input_data){
        this.input = input_data;
        //console.log("this.input ")
        //console.log(this.input )
        //console.log("this.bias ")
        //console.log(this.bias)
        var x =nj.dot(this.input, this.weights)
        //console.log("x")
        //console.log(x)
        this.output = (nj.dot(this.input, this.weights)).add(this.bias)
        //console.log("not here ")
        return this.output
    }
    backward_propagation(output_error,learning_rate){
        //console.log("afkeno")
        input_error = nj.dot(output_error, this.weights.T)
        weights_error = nj.dot(this.input.T, output_error)
        this.weights = this.weights.subtract(learning_rate.multiply(weights_error))
        this.bias = this.bias.subtract(learning_rate.multiply(output_error))
        return input_error
    }
}


exports.FCLayer = FCLayer