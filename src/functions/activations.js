
var nj = require('numjs');

function tanh(x){
    return nj.tanh(x)
}

function tanh_prime(x){
    return (nj.tanh(x).pow(2).subtract(1)).multiply(-1)
}

exports.tanh = tanh
exports.tanh_prime = tanh_prime