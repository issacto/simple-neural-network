var NeuralNetwork = require('../index').NeuralNetwork;

test('Neural Network Constructor Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    var network = new NeuralNetwork([3,3,3,1],0.6,0.6)
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    var weights = network.getWeights()
    expect(Array.isArray(weights)).toBe(true);
});

test('Neural Network Answer Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    predictInput =[[1,0,0]]
    var network = new NeuralNetwork([3,3,3,1])
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    var ans = network.predict(predictInput)
    expect(Number.isFinite(ans)).toBe(true);
    expect(-1<=ans).toBe(true);
    expect(ans<=1).toBe(true);
});

test('Neural Network Error Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    var network = new NeuralNetwork([3,3,3,1])
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    var errors = network.getErrors()
    expect(Array.isArray(errors)).toBe(true);
});


test('Neural Network Weights Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    var network = new NeuralNetwork([3,3,3,1])
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    var weights = network.getWeights()
    expect(Array.isArray(weights)).toBe(true);
});


test('Neural Network Bias Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    var network = new NeuralNetwork([3,3,3,1],0.6,0.6)
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    var bias = network.getBias()
    expect(Array.isArray(bias)).toBe(true);
});