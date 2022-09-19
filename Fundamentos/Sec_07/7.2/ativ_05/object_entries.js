const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);

// for (let i = 0; i < pairKeyValue.length; i += 1) {
//   for (let x = 0; x < pairKeyValue[i].length; x += 1){
//     console.log(`País: ${pairKeyValue[i]}, Capital: ${pairKeyValue[i][x]}`);
//   }
// }

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};