/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
     if (functions.length === 0) {
        return function(x) {
            return x;
        };
    }
    return function(x) {
        var result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

const arr1 = [x => x + 1, x => x * x, x => 2 * x];
const arr2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const arr3 = []

const n1 = 4;
const n2 = 1;
const n3 = 42;

const fn1 = compose(arr1);
const fn2 = compose(arr2);
const fn3 = compose(arr3);

console.log(fn1(n1));
console.log(fn2(n2));
console.log(fn3(n3));