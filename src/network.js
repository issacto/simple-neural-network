var nj = require('numjs');

class Network{
    
    constructor(){
        this.layers =[];
        this.loss = null;
        this.loss_prime=null;
        this.errors = []; //erros from epoch
    }

    add(layer){
        this.layers.push(layer);
    }

    use(loss, loss_prime){
        this.loss = loss;
        this.loss_prime=loss_prime
    }
    
    predict(input_data){

        var samples =input_data.length
        var result = []
        console.log('here')
        for(let i =0;i<samples;i++ ){
            var output = input_data[i];
            for(let layer of this.layers){
                output = layer.forward_propagation(output);
            }
            result.push(output.selection.data);
        }
        
        return result
    }

    fit( x_train, y_train, epochs, learning_rate){
        var samples= x_train.length;
        for (let i =0; i<epochs;i++){
            var err = 0
            for(let j =0;j< samples; j++ ){
                var output = x_train[j]
                for(let layer of this.layers){
                    output = layer.forward_propagation(output)
                }

                err += this.loss(y_train[j],output);
                var error = this.loss_prime(y_train[j], output)

                for (let ii =0;ii< this.layers.length;ii++){
                    var iii = this.layers.length-1-ii;
                    error = this.layers[iii].backward_propagation(error, learning_rate)
                }
                err /= samples;
            }
            console.log("epoch",i,err)
            this.errors.push(err)
        }
        return this
    }

    getWeights(){
        var weights = []
        for(var layer of this.layers){
            if(layer.weights){
                weights.push(layer.getWeights())
            }
        }
        return weights
    }

    getErrors(){
        return this.errors
    }


}

exports.Network = Network