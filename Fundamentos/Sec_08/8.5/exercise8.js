const greet = (nome, greeting = 'Hi') => `${greeting} ${nome}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));