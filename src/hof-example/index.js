const sum = (a, b) => a + b;
const multiplication = (a, b) => a * b;

const getResultOperation = op => (a, b) =>
  `The ${op.name} of ${a} and ${b} is ${op(a, b)}`;

const getSumResult = getResultOperation(sum);
const getMultiplicationResult = getResultOperation(multiplication);

console.log(getSumResult(2, 5));
console.log(getMultiplicationResult(2, 5));
