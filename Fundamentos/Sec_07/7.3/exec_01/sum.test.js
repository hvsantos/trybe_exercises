const sum = require('./sum');

describe('Teste da função sum()', () => {
  it('Deve retornar 9 se serem inseridos 4 e 5', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Deve retornar 0 se serem inseridos 0 e 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it(`Deve retornar um erro se forem inseridos 4 e '5'`, () => {
    expect(() => sum(4,'5')).toThrow()
  });
  it(`Deve retornar 'parameters must be numbers' se serem inseridos 4 e '5'`, () => {
    expect(() => sum(4,'5')).toThrow(new Error('parameters must be numbers'))
  })
})