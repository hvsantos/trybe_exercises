const varFatorial = (num) => {
  let sumNum = 0;
  if (num === 1 || num === 0) {
    sumNum = 1;
  } else {
    for (let i = num; i > 0; i -= 1) {
      sumNum += i;
    }
  }
  return `Esse é o fatorial ${sumNum}`;
}

console.log(varFatorial(20));

function fatorialNumbers(num) {
  return num >= 1? num + fatorialNumbers(num - 1) : num;
}

console.log(`Esse é o fatorial ${fatorialNumbers(20)}`);