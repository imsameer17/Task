let inputArray = [3, 6, -5, -2, 7, 3]
    let max = "";
    for (let i = 1; i < inputArray.length; i++) {
        max = Math.max(inputArray[i] * inputArray[i - 1], max);
    }
console.log(max)
    