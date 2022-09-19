let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  const empty = [];
  let arrayzao = array;
  for (let i = array.length -1; i >= 0; i -= 1){
    let max = 0;
    for (let x = 0; x < arrayzao.length; x += 1){
      if (arrayzao[x] >= max){
        max = arrayzao[x];
      }
    }
    const order = array.indexOf(max);
    empty.push(max);
    array.splice(order, 1);
    arrayzao = array;
  }
  empty.reverse();
  return empty;
}

console.log(sortOddsAndEvens(oddsAndEvens));

function sortNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  return sorted
}


oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(sortNumbers(oddsAndEvens));
