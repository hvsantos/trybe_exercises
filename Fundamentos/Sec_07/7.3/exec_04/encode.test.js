const functions = require('./encode')
const encode = functions.encode
const decode = functions.decode

describe('Teste da função encode', () => {
  it('Teste se encode e decode são funções e se são definidas', () => {
    expect(encode('test')).toBeDefined()
    expect(typeof encode).toBe('function')
    expect(decode('test')).toBeDefined()
    expect(typeof decode).toBe('function')
  });
  it(`Retorne '1, 2, 3, 4, 5' da função encode() se for inserido 'a, e, i, o, u`, () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  });
  it(`Retorne 'a, e, i, o, u' da função decode() se for inserido '1, 2, 3, 4, 5'`, () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  });
  it(`Teste o retorno as letras 'q, w, e, r, t, y, u, i, o, p' na função encode`, () => {
    expect(encode('q')).toBe('q')
    expect(encode('w')).toBe('w')
    expect(encode('e')).toBe('2')
    expect(encode('r')).toBe('r')
    expect(encode('t')).toBe('t')
    expect(encode('y')).toBe('y')
    expect(encode('u')).toBe('5')
    expect(encode('i')).toBe('3')
    expect(encode('o')).toBe('4')
    expect(encode('p')).toBe('p')
  });
  it(`Teste o retorno os numeros '1, 2, 3, 4, 5, 6, 7, 8, 9' na função decode`, () => {
    expect(decode('1')).toBe('a')
    expect(decode('2')).toBe('e')
    expect(decode('3')).toBe('i')
    expect(decode('4')).toBe('o')
    expect(decode('5')).toBe('u')
    expect(decode('6')).toBe('6')
    expect(decode('7')).toBe('7')
    expect(decode('8')).toBe('8')
    expect(decode('9')).toBe('9')
  });
  it(`Teste o tamanho da string retornada pelo encode e decode`, () => {
    expect(encode('abce').length).toBe(4)
    expect(decode('1234').length).toBe(4)
  });
});