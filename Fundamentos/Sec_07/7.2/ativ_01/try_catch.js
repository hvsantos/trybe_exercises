// const sum = (value1, value2) => {
//   return (typeof value1 !== 'number' || typeof value2 !== 'number') ? 'Os valores devem ser numéricos' : value1 + value2;
// }
// console.log(sum(2, 5));

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return `Erro: ${error.message}`;
  }
};

console.log(sum(2, '3'));