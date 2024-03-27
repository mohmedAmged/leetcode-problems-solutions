/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var accum = init;
    for (var i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i])
    }
    return accum;
};
var nums = [1, 2, 3, 4];
var nums3 = [];

function sum(accum, curr){
    return accum + curr;
}

function sum2(accum, curr){
    return accum + curr * curr;
}

function sum3(accum, curr){
    return 0;
}

var init =0;
var init2 =100;
var init3 =25;

const result1 = reduce(nums, sum, init)
const result2 = reduce(nums, sum2, init2)
const result3 = reduce(nums3, sum3, init3)

console.log(result1);
console.log(result2);
console.log(result3);