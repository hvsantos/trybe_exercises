const searchEmployee = require('./searchEmployee')

describe('Teste da função searchEmployee', () => {
  it('A função é declarada?', () => {
    expect(searchEmployee()).toBeDefined()
  });
  it('A função é do tipo função?', () => {
    expect(typeof searchEmployee).toBe('function')
  });
  it(`Retorna 8579-6 se for inserido o id igual a 8579-6 e o detail sendo id`, () => {
    expect(searchEmployee('8579-6', 'id')).toBe('8579-6')
  });
  it(`Retorna Ana se for inserido o id igual a 8579-6 e o detail sendo firstName`, () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
  });
  it(`Retorna Gates se for inserido o id igual a 8579-6 e o detail sendo lastName`, () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates')
  });
  it(`Retorna ['UX', 'Design'] se for inserido o id igual a 8579-6 e o detail sendo specialities`, () => {
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design'])
  });
  it(`Retorna 'Um dos parametros esta vazio' quando um dos parametros não é definido`, () => {
    expect(searchEmployee('1234-5')).toBe('Um dos parametros esta vazio')
  });
  it(`Retorna 'Informação indisponível' quando o segundo parametro não é encontrado`, () => {
    expect(searchEmployee('4678-2', 'fullName')).toBe('Informação indisponível')
  });
  it(`Retorna 'ID não identificada' quando o primeiro parametro não é encontrado`, () => {
    expect(searchEmployee('1234-5', 'firstName')).toBe('ID não identificada')
  });
})