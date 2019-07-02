// assign random numbers to a & b
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

// set add, multiply, division and subtraction
let add = a + b;
let mult = a * b;
let div = (a / b);
let sub = a - b;


//  display result in console
console.log(`ADDITION ${a} + ${b} = ${add}`);
console.log(`MULTIPLICATION ${a} * ${b} = ${mult}`);
console.log(`DIVISION ${a} / ${b} = ${div.toFixed(2)}`);
console.log(`SUBTRACTION ${a} - ${b} = ${sub}`);


let x = 0;


for (let z = 0; z < 20; z++) {
    x++;
    console.log(x);
}