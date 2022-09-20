function techList(arrTech, name) {
  const emptyArr = [];
  if (arrTech.length === 0) {
    return 'Vazio!'
  }
  arrTech = arrTech.sort()
  for (let i = 0; i < arrTech.length; i += 1) {
    let newObj = {tech: arrTech[i], name: name};
    emptyArr.push(newObj)
  }
  return emptyArr;
}

module.exports = techList;