# Simple Neural Network

* Lightweight and flexible Tanh neural network
* Includes a callback funtion that returns weights of all nodes of the model

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
    //first index is the input size
    //last index, the output layer, should always equal one
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
    var prediction = network.predict(testInputs)
```
### Get Weights
```js
    var weights = network.getWeights()
```


## Reference

1. https://towardsdatascience.com/math-neural-network-from-scratch-in-python-d6da9f29ce65