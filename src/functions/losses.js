
var nj = require('numjs');

function mse(y_true,y_pred){
    return (y_true.subtract(y_pred)).pow(2).mean()
}

function mse_prime(y_true,y_pred){
    return y_pred.subtract(y_true).multiply(2).divide(y_true.size)
}


exports.mse = mse
exports.mse_prime = mse_prime