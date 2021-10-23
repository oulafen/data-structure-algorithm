// 算法测试

import { calcExp } from '../002-postfixExpression';

describe.each([
    [['4','13','5','/','+'], parseInt(4+(13/5))],
    [['10','6','9','3','+','-11','*','/','*','17','+','5','+'], parseInt(((10*(6/((9+3)*-11)))+17)+5)]
])('后缀表达式-calcExp', (exp, expected) => {
    test(`${exp}`, () => {
        expect(parseInt(calcExp(exp))).toBe(expected)
    })
})