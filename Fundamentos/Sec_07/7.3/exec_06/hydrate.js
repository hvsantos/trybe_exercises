function hydrate(drinks) {
  let sum = 0;
  let result  = '';
  const arrDrinks = drinks.split(' ')
  for (let i = 0; i < arrDrinks.length; i += 1){
    let num = Number(arrDrinks[i]);
    if (!isNaN(num)){
      sum += num;
    }
  }
  (sum <= 1) ? result = sum + ' copo de água' : result = sum + ' copos de água';
  return result
}

module.exports = hydrate