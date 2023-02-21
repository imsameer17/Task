var str = "abba"
let reverse = []
var str1 = str.split('')

for (let i = str1.length-1; i>=0; i--){
    reverse += (str1[i])
}
if (str == reverse){
    console.log(true)
}
else{
    console.log(false)
}