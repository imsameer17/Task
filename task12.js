Products = ['eggs', 'milk', 'cheese'];
productPrices = [2.89, 3.29, 5.79];
productSold = ['eggs', 'eggs', 'cheese', 'milk']
soldPrice = [2.89, 2.99, 5.97, 3.29];
let count = 0;
for (let i = 0; i<=Products.length-1; i++){
    if (Products[i] = productSold[i] && productPrices[i]  != soldPrice[i] ){
        count++
    }
}
console.log(count)

