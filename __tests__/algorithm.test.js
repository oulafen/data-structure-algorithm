// 算法测试

import { isLegalBrackets } from '../src/algorithm/001-legalBrackets';
import { calcExp } from '../src/algorithm/002-postfixExpression';

describe.each([
    ['sdf(ds(ew(we)rw)rwqq)qwewe', true],
    ['(sd(qwqw)sd(sd))', true],
    ['()()sd()(sd()fw))(', false]
])('合法括号-isLegalBrackets', (str, expected) => {
    test(`${str}`, () => {
        expect(isLegalBrackets(str)).toBe(expected)
    })
})

describe.each([
    [['4','13','5','/','+'], parseInt(4+(13/5))],
    [['10','6','9','3','+','-11','*','/','*','17','+','5','+'], parseInt(((10*(6/((9+3)*-11)))+17)+5)]
])('后缀表达式-calcExp', (exp, expected) => {
    test(`${exp}`, () => {
        expect(parseInt(calcExp(exp))).toBe(expected)
    })
})