const myRemove = require('./myRemove');

describe('Teste da função myRemove', () => {
  it('Retorne o array [1,2,4] se myRemove([1,2,3,4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  it('Não retorne o array [1,2,3,4] se myRemove([1,2,3,4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  it('Retorne o array [1,2,3,4] se myRemove([1,2,3,4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
})