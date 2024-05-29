function sum(a, b){
return a + b
}
let x = sum(5,6)
console.log(x)

function r(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum = sum + arr[i]
    }
    return sum
}
console.log(r([2, 1, 3, 4]))