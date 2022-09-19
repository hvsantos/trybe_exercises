const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const splitObject = (object) => {
  const keyNames = Object.keys(object);
  for (const key in keyNames) {
    console.log(`${keyNames[key]}, Nível: ${object[keyNames[key]]}`)
  }
}
splitObject(student1)
console.log('-------------')
splitObject(student2)