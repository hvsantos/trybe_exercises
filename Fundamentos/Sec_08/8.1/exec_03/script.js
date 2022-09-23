const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'N.A', 'N.A', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareA = (checkRight, checkAnswer) => {
  let cont = 0;
  for(let i = 0; i < checkRight.length; i += 1) {
    if (checkAnswer[i] === checkRight[i]) {
      cont += 1;
    } else if (checkAnswer[i] !== 'N.A') {
      cont -= 0.5;
    }
  };
  return cont
};

const checkAnswers = (rAnswers, sAnswers, funcComp) => 'Pontuação: ' + funcComp(rAnswers, sAnswers);

console.log(checkAnswers(rightAnswers, studentAnswers, compareA))