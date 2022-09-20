const myFizzBuzz = require('./myFizzBuzz');

describe('Teste da função myFizzBuzz()', () => {
  it(`Retorne 'fizzbuzz' se for inserido um valor divisivel por 3 e 5`, () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  });
  it(`Retorne 'fizz' se for inserido um valor disivel por 3`, () => {
    expect(myFizzBuzz(3)).toBe('fizz')
  });
  it(`Retorne 'buzz' se for inserido um valor divisel por 5`, () => {
    expect(myFizzBuzz(5)).toBe('buzz')
  });
  it(`Retorne o numero se o valor inserido não foi divisivel por 3 ou 5`, () => {
    expect(myFizzBuzz(7)).toBe(7)
  });
  it(`Retorne false se o valor inserido não for um numero`, () => {
    expect(myFizzBuzz('string')).toBe(false)
  })
})