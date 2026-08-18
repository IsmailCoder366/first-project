let a = 20;
let b = 100;


setTimeout(() =>{
    b = 0;
    console.log(a+b)
}, 2000)


console.log(a+b);