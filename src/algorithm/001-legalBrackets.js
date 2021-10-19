/**
下面的字符串中包含小括号，请编写一个函数来判断字符串中的括号是否合法，所谓合法就是括号成对出现
```
sdf(ds(ew(we)rw)rwqq)qwewe  合法
(sd(qwqw)sd(sd))            合法
()()sd()(sd()fw))(          不合法
```
**/

import Stack from "../data-structure/Stack";

export function isLegalBrackets(str) {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        const cur = str[i];
        if (cur === '(') {
            stack.push(1)
        }
        if (cur === ')') {
            if (stack.isEmpty()) {
                return false;
            } else {
                stack.pop()
            }
        }
    }
    return stack.isEmpty();
}
