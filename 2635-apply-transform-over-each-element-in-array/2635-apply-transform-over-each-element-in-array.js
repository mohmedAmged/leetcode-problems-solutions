/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }
    return newArr;
};

var arr = [1,2,3];

function plusOne(el){
    return el + 1;
}

function plusI(el, index){
    return el + index;
}

function constant(){
    return 42;
}

const newArr1 = map(arr, plusOne);
const newArr2 = map(arr, plusI);
const newArr3 = map(arr, constant);

console.log(newArr1);
console.log(newArr2);
console.log(newArr3);
