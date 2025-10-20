// executar o jest com o comando npm test
const somar = require('./Calculadora.js');

// A função test define um caso de teste individual
test('Soma corretamente dois numeros positivos', () => {
    expect(somar(2, 3)).toBe(5);
});

test('soma corretamente um número positivo e um zero', () => {
  expect(somar(5, 0)).toBe(5);
});

test('soma corretamente um número positivo e um número negativo', () => {
  expect(somar(10, -5)).toBe(5);
});