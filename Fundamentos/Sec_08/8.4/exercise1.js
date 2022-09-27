// 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.map((element) => element.reduce((a,b) => a+b));

console.log(flatten(arrays))