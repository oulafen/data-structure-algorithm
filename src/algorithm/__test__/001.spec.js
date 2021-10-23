// 算法测试

import { isLegalBrackets } from '../001-legalBrackets';

describe.each([
    ['sdf(ds(ew(we)rw)rwqq)qwewe', true],
    ['(sd(qwqw)sd(sd))', true],
    ['()()sd()(sd()fw))(', false]
])('合法括号-isLegalBrackets', (str, expected) => {
    test(`${str}`, () => {
        expect(isLegalBrackets(str)).toBe(expected)
    })
})
