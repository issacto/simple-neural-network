var NeuralNetwork = require('../index').NeuralNetwork;


test('Neural Network Answer Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    testInputs =[[1,0,0]]
    var network = new NeuralNetwork([3,3,3,1])
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    //test answer
    var ans = network.predict(testInputs)
    expect(Number.isFinite(ans)).toBe(true);
    expect(-1<=ans).toBe(true);
    expect(ans<=1).toBe(true);
});

test('Neural Network Errors Testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    testInputs =[[1,0,0]]
    var network = new NeuralNetwork([3,3,3,1])
    var epoch = 100
    var learningRate =0.1
    network.train(trainInputs,trainOutputs, epoch,learningRate)
    //test errors
    var errors = network.getErrors()
    expect(Array.isArray(errors)).toBe(true);
});