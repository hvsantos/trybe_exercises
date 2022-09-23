const genNumber = () => Math.floor(Math.random() * 5) + 1;
const compareNumber = (number, funcName) => number === funcName() ? 'Parabéns você ganhou' : 'Tente novamente';
console.log(compareNumber(3, genNumber));