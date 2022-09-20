const myRemove = require('./myRemove');

describe('Teste da função myRemove()', () => {
  it('Retorne o array [1,2,4] se inserido como primeiro parametro [1,2,3,4] e o segundo parametro 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  it('Não retorne o array [1,2,3,4] se o primeiro parametro [1,2,3,4] e o segundo 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  it('Retorne o array [1,2,3,4] se o primeiro parametro for [1,2,3,4] e o segundo 5', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});