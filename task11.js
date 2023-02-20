let arr = [-4, 3, -9, 0, 4, 1]
let positive = ""
let negative = ""
let zero = ""
for (let i=0; i<= arr.length-1; i++){
if(arr[i] > 0){
    positive++
}
 else if (arr[i] < 0){
     negative++
}
else if (arr[i] == 0){
    zero++
}
}
console.log(positive/arr.length)
console.log(negative/arr.length)
console.log(zero/arr.length)