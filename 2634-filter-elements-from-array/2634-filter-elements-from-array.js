/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var newArr =[]
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push((arr[i]))
        }
    }
    return newArr;
};
var arr = [0,10,20,30]
var arr3 = [-2,-1,0,1,2]

function greaterThan10(el){
    return el > 10;
}

function firstIndex(el, index){
    return index === 0;
}

function plusOne(el){
    return el + 1;
}

const newArr1 = filter(arr, greaterThan10)
const newArr2 = filter(arr, firstIndex)
const newArr3 = filter(arr3, plusOne)

console.log(newArr1);
console.log(newArr2);
console.log(newArr3);