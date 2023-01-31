let a = 13.890123;
let b = 2.891564;
let n = 3;

let num1 = a - Math.trunc(a);
let num2 = b - Math.trunc(b);

let num01 = Math.trunc(num1 * 10 ** n);
let num02 = Math.trunc(num2 * 10 ** n);

console.log("Дробная часть числа a:", num01);
console.log("Дробная часть числа b:", num02);
//let num1 = a % 1;
//let num2 = b % 1;

//console.log(num1.toFixed(3));
//console.log(num2.toFixed(3));

console.log("Сравнение:");
console.log("890 > 891", num1 > num2);
console.log("890 < 891", num1 < num2);
console.log("890 >= 891", num1 >= num2);
console.log("890 <= 891", num1 <= num2);
console.log("890 = 891", num1 === num2);
console.log("890 != 891", num1 != num2);
