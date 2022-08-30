//踢出蛇所在位置
function getDiffrent(array1, array2) {
    let arr = array1.concat(array2);
    let result = [];
    arr.forEach((item) => {
        if (arr.indexOf(item) == arr.lastIndexOf(item)) {
            result.push(item)
        }
    });
    return result.length
}
let arr1 = [1,2,3,4,5,6]
let arr2 = [2,4,5]

console.log(getDiffrent(arr1, arr2))
console.log(arr1.length)