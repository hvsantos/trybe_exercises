const xToName = (phrase, name) => {
  const genArray = phrase.split('');
  for (let element of genArray){
    if (element === 'x' || element === 'X') {
      genArray[genArray.indexOf(element)] = name;
    }
  }
  const result = genArray.join('')
  return result;
}

const mySkills = (phrase) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let result = `
  ${phrase}
  Minhas três principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}`;
  return result;
}

console.log(mySkills(xToName('Tryber x aqui!', 'Nome')));