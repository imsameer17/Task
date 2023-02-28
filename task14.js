let days = 42;
let sellin = 25;
let sellingDays = 25;
let quality = 50;

for (let i =1; i<=sellingDays; i++){
        quality--
        sellin--
}
for (let i=sellingDays; i<days; i++)
{
    quality -= 2
}
if (quality> 0){
    console.log("normal items quality is", quality)
    console.log("sellin days left of normal items", sellin)
    console.log("conjured items quality is", quality/2)
}else{
    console.log("quality is ", 0)
    console.log("sellin days left of normal items", 0)
    console.log("conjured items quality is", 0)
}if (days<=5){
    console.log("brie quality is", days*3)
}
if (days*2+5 >= 50){
    console.log("brie quality is", 50) 
}
else if (days>5){
    console.log("brie quality is ",days*2+5)
}
console.log("sulfur quality is ", 80)