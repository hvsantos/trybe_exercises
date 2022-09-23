const genNameEmail = (cName) => {
  return { name: cName, email: `${cName.toLowerCase().replace(' ', '_')}@trybe.com` }
}

const newEmployees = (names, callFunc) => {
  const employees = {}
  for (let i = 0; i < names.length; i += 1){
    employees[`id${i+1}`] = callFunc(names[i])
  }
  return employees;
};

const arrNames = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva']

console.log(newEmployees(arrNames, genNameEmail));