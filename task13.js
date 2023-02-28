let arr = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]
let solutionArr = [[8, 3, 4], [1, 5, 9], [6, 7, 2]]
let cost = []
let totalCost = 0;
for (let i=0; i<=arr.length-1; i++){
    for (let j=0; j<=solutionArr.length-1; j++){
cost = solutionArr[i][j] - arr[i][j]
totalCost += cost
}}
console.log(totalCost)