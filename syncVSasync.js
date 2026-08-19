// let a = 20;
// let b = 100;


// setTimeout(() =>{
//     b = 0;
//     console.log(a+b)
// }, 2000)


// console.log(a+b);



const fs = require('fs')

const data = fs.readFileSync("text/peter.txt", "utf-8")
console.log(data)
console.log("script")