let arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftSum = leftSum + arr[i][i]; 
        rightSum = rightSum + arr[i][arr.length - i -1];
    }
let  answer = Math.abs(leftSum - rightSum)
    console.log(answer)