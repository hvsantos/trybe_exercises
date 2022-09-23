const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((testName) => testName === name)
console.log(hasName(names, 'Ana'));