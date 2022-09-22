const genNumber = () => Math.floor(Math.random() * 5) + 1

const compareNumber = (number) => number === genNumber() ? 'Parabéns você ganhou' : 'Tente novamente';
