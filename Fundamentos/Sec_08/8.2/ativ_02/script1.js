const numbers = [19, 21, 30, 3, 45, 22, 15];

const div3 = (number) => number % 3 === 0
const div5 = (number) => number % 5 === 0

const findDivisibleBy3And5 = (arrNum) => arrNum.find((number) => div3(number) && div5(number))

console.log(findDivisibleBy3And5(numbers));