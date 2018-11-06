// const numbers=[1,2,3,4,5]

// function myOwnForEach(arr, func){
//     for (let index=0; index<arr.length;index++){
//         console.log(arr[index],index, array )
//     }
// }
// myOwnForEach(numbers, (e)=>console.log(e))

const numbers = [1, 2, 3, 4, 5]

Array.prototype.myOwnForEach=function(func, thisArg) {
    for (let index = 0; index < this.length; index++) {
        func.call(thisArg, arr[index], index, this)
    }
}

numbers.myOwnForEach((e)=>console.log(e))
    //1,2,3,4,5, in browser console




