const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareA = (checkRight, checkAnswer) => (checkRight === checkAnswer)? 1:0;

const checkAnswers = (rAnswers, sAnswers, funcComp) => {
  let cont = 0;
  for(let i = 0; i < rAnswers.length; i += 1) {
    cont += funcComp(rAnswers[i], sAnswers[i])
  }
  return `Pontuação: ${cont}`
}

console.log(checkAnswers(rightAnswers, studentAnswers, compareA))