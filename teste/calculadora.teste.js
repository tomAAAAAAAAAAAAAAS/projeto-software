const calculadora = require("../calculadora")
 
test('Soma 2 + 3 e retorna 5', () =>{
    expect(calculadora(2, 3, '+')).toBe(5);
});
 
test('Subtrai 4 - 3 e retorna 1', () =>{
    expect(calculadora(4, 3, '-')).toBe(1);
});
 
test('Multiplica 2 * 3 e retorna 6', () =>{
    expect(calculadora(2, 3, '*')).toBe(6);
});
 
test('Divide 4 / 2 e retorna 2', () =>{
    expect(calculadora(4, 2, '/')).toBe(2);
});
 