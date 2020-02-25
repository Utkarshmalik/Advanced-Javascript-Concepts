function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
const multiplyByTen = multiply.bind(this, 10);

const x = multiplyByTwo(4)
const y = multiplyByTen(5);

console.log(x)
console.log(y)

