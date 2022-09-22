const genNameEmail = (cName) => {
  const genEmail = `${cName.toLowerCase().replace(' ', '_')}@trybe.com`
  return { name: cName, email: genEmail }
}

const newEmployees = (names) => {
  const employees = {}
  for (let i = 0; i < names.length; i += 1){
    employees[`id${i+1}`] = genNameEmail(names[i])
  }
  return employees;
};

const arrNames = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva']

console.log(newEmployees(arrNames));