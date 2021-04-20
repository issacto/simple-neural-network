var nj = require('numjs');
const a = require("../index")

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
            //console.log(input_data[i])
            var output = input_data[i];
            
            //console.log("i")
            //console.log(i)
            for(let layer of this.layers){
                //console.log("iiiii")
                //console.log(layer)

                //console.log("layer")
                //console.log(layer)
                output = layer.forward_propagation(output);
                console.log("output")
                console.log(output)
            }
            

            //console.log("outputewrt7890")
            //console.log(output)
            //console.log(output)
            result.push(output.selection.data);
        }
        return result
    }
    fit( x_train, y_train, epochs, learning_rate){
        //console.log("x_train")
        //console.log(x_train)
        var samples= x_train.length;
        //console.log("samples")
        //console.log(samples)
        for (let i =0; i<epochs;i++){
            var err = 0
            for(let j =0;j< samples; j++ ){
                var output = x_train[j]
                for(let layer of this.layers){
                    output = layer.forward_propagation(output)
                }
               //console.log(output)

                //console.log("bejrb")
                err += this.loss(y_train[j],output);
                /*onsole.log("y_train[j]")
                console.log(y_train[j].selection.data)
                console.log("output")
                console.log(output.selection.data)*/
                var error = this.loss_prime(y_train[j], output)
                //console.log("error")
                //console.log(error)
                for (let ii =0;ii< this.layers.length;ii++){
                    /*console.log("error")
                    console.log(error)*/
                    var iii = this.layers.length-1-ii;
                    /*console.log("iii")
                    console.log(iii)*/
                    error = this.layers[iii].backward_propagation(error, learning_rate)
                    if(this.layers[iii].weights){
                        var weights = this.layers[iii].getWeights()
                        a.activeCount[iii] = weights
                    }
                }
                err /= samples;
                //console.log("epoch",i," ", output.selection.data)
            }
            
            console.log("epoch",i,err)
           // a.reset(a.activeCount+1)*/
        }
        return this
    }

}

exports.Network = Network