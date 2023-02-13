 let Rows = 5;
    let output = '';
    for (let i = 1; i <= Rows; i++) {
        for (let j = 1; j <= Rows - i; j++) {
            output += '.'
        }
        for (let j = 1; j <= i; j++) {
            
            
            output += i;
        }
        console.log(output);
        output = '';
    }