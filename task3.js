let arr = [1, 2, 3, 4, 5, 6, 7]
let k=3
for (let i=1; i<=k; i--){
    num = arr.pop()
    arr.unshift(num)
}
console.log(arr)