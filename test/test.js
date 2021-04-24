var NeuralNetwork = require('../index').NeuralNetwork;


test('Neural Network testing', () => {
    trainInputs =[[1,0,0],[1,1,1],[1,0,1],[1,1,0],[2,1,0],[1,1,0]]
    trainOutputs =[0,1,1,0,0,0]
    testInputs =[[1,0,0]]
    var x = new NeuralNetwork([3,3,3,1])
    var epoch = 100
    var learningRate =0.1
    x.train(trainInputs,trainOutputs, epoch,learningRate)
    var ans = x.predict(testInputs)
    expect(Number.isFinite(ans)).toBe(true);
    expect(-1<=ans).toBe(true);
    expect(ans<=1).toBe(true);
});