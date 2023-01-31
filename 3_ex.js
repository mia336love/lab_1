const n = 0;
const m = 100;

const num = Math.round(
  Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m)
);

const num1 = num + (num % 2) + 1;
console.log(num1);
