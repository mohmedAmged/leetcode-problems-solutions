/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var newArr = []
    var executed = false;
    return function(...args){
         if (!executed) {
            executed = true;
            newArr.push(fn(...args))
            return newArr[0];
        }else{
            if (JSON.stringify(args)=== JSON.stringify(newArr[1])) {
                return newArr[0];
            }else{
                return undefined
            }
        }
    }
};


  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
  console.log(onceFn(1,2,3)); // 6
  console.log(onceFn(2,3,6)); // returns undefined without calling fn
 
