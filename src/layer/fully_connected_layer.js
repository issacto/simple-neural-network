const { layer } = require("./layer")




var nj = require('numjs');

class FCLayer extends layer{
    constructor(input_size,output_size ){
        super();
        console.log("input_size",input_size,"output_size",output_size)
        this.weights = nj.random([input_size,output_size]).subtract(0.5)
        this.bias = nj.random([1, output_size]).subtract(0.5)
    }
    forward_propagation(input_data){
        this.input = input_data;
        //console.log("forward");
        //console.log(input_data)
        //console.log(this.weights)
        //console.log("x")
        //console.log(x)
        //console.log("bias")
        //console.log(this.bias)
        this.output = (nj.dot(this.input, this.weights)).add(this.bias)
        //console.log("ojbfsb")
        //console.log(this.output)
        //console.log("aefbnljb")
        return this.output
    }
    backward_propagation(output_error,learning_rate){
        
        var input_error = nj.dot(output_error, this.weights.T)
        /*
        console.log("here")
        console.log("output_error")
        console.log(output_error)
        console.log("input_error")
        console.log(input_error)*/
        /*
        console.log("NOTFINISHED ")
        console.log("this.input.T")
        console.log(this.input.T)
        console.log("output_error")
        console.log(output_error)*/
        var weights_error = nj.dot(this.input.T, output_error)
        //console.log("weights_error")
        //console.log(weights_error)
        this.weights = this.weights.subtract(weights_error.multiply(learning_rate))
        this.bias = this.bias.subtract(output_error.multiply(learning_rate))
        return input_error
    }
    
    getWeights(){
        console.log(this.weights)
        var returnArray = []
        var tempArray = []
        for(let i in this.weights.selection.data){
            tempArray.push(this.weights.selection.data[i]) 
            if(tempArray.length == this.weights.selection.shape[0]){
                //console.log("length, ",this.weights.selection.shape[0])
                returnArray.push(tempArray)
                tempArray = []
            }

        }
        return returnArray
    }
}


exports.FCLayer = FCLayer