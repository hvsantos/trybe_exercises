const longestWord = (words) => {
  let splitWords = words.split(' ');
  let max = '';
  for (element of splitWords) {
    if (element.length > max.length){
      max = element;
    }
  }
  return max;
}
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// const longword = (words) => {
//   let arraywords = words.split(' ')
//   arraywords.sort((a, b) => {
//     return a.length > b.length? a : b;
//   })
// }
// console.log(longword('Antônio foi ao banheiro e não sabemos o que aconteceu'));