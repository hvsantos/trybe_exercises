const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrName, arrGrade) {
  const media = arrGrade.map((array) => array.reduce((a,b) => a+b)/array.length);
  const result = arrName.map((student, index) => ({name: student, average: media[index]}));
  return result;
}

console.log( studentAverage(students, grades))

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];