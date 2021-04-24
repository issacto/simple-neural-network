# Simple Neural Network

* Light Weight
* Includes a callback funtion that returns details of all layers and all nodes of the model

## On Node.js

```sh
npm install x
```
```js
var NeuralNetwork = require('x').NeuralNetwork;

```

## Basics

### Create
```js
    //first index, input layer
    //last index, the output layer should be equal to one in most of the cases
    var network = new NeuralNetwork([3,3,3,1])    
```
### Train 
```js
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
```
### GetErrors
```js getErrors
    var errors = network.getErrors()
```
### Predict
```js
    predictInput =[[1,0,0]] 
    x.predict(testInputs)
```
### Get Weights
```js
    var weights = network.getWeights()
```


## Reference
