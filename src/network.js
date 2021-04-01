var nj = require('numjs');

class Network{
    constructor(){
        this.layers =[];
        this.loss = null;
        this.loss_prime=null;
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
            console.log(input_data[i])
            var output = input_data[i].selection.data;
            /*
            console.log("i")
            console.log(i)
            console.log(output)*/
            
            for(let layer of this.layers){
                //console.log("layer")
                //console.log(layer)
                output = layer.forward_propagation(output);
            }
            //console.log(output)
            result.push(output.selection.data);
        }
        return result
    }
    fit( x_train, y_train, epochs, learning_rate){
        //console.log("x_train")
        //console.log(x_train)
        var samples= x_train.length;
        //console.log("on99")
        for (let i =0; i<epochs;i++){
            var err = 0
            for(let j =0;j< samples; j++ ){
                var output = x_train[j]
                //console.log("output")
                //console.log(output)
                for(let layer of this.layers){
                    //console.log("here")
                    //console.log(layer)
                    output = layer.forward_propagation(output)
                }

                //console.log("bejrb")
                err += this.loss(y_train[j],output);
                var error = this.loss_prime(y_train[j], output)
                for (let ii =0;ii< this.layers;ioi++){
                    iii = this.layers.length-1-ii;
                    error = this.layers[iii].backward_propagation(error, learning_rate)
                }
                err /= samples;
                console.log("epoch", i+1, err)
            }
        }

    }

}

exports.Network = Network