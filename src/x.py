import numpy as np
arr = [
[1, 1, 1],
[2, 2, 2],
[3, 3, 3]]

a = [[1, 2, 3]]
print(1-np.tanh(a)**2)


a = np.array([1, 2, 3])
b = np.array([2, 2, 2])
def mse_prime(y_true, y_pred):
    return 2*(y_pred-y_true)/y_true.size

print(mse_prime(a,b))

