const {layer} =require("./layer")

class ActivationLayer extends layer{
    
    constructor(activation, activation_prime){
        super();
        this.activation=activation;
        this.activation_prime=activation_prime;
    }
    forward_propagation(input_data){
        this.input = input_data;
        this.output =  this.activation(input_data);
        //console.log("whatsup")
        //console.log(this.output )
        return this.output;
    }
    backward_propagation(output_error,learning_rate){
        /*console.log("NOWORNEVER")
        console.log(this.input)
        console.log(output_error)
        console.log(this.activation_prime(this.input))*/
        //console.log(this.activation_prime(this.input)*output_error)
        return this.activation_prime(this.input).multiply(output_error);
    }
}

exports.ActivationLayer = ActivationLayer