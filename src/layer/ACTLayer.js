const {layer} =require("./layer")
var nj = require('numjs');

class ActivationLayer extends layer{
    
    constructor(activation, activation_prime){
        super();
        this.activation=activation;
        this.activation_prime=activation_prime;
    }
    forward_propagation(input_data){
        this.input = input_data;
        /*console.log("here")
        console.log(this.input)*/
        this.output =  this.activation(input_data);
        return this.output;
    }
    backward_propagation(output_error,learning_rate){
        return this.activation_prime(this.input)*output_error;
    }
}

exports.ActivationLayer = ActivationLayer