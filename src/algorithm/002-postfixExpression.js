/**
    逆波兰表达式，也叫后缀表达式，它将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式，例如(a+b)*(c+d)转换为ab+cd+*
    ```
    ['4','13','5','/','+'] 等价于 (4+(13/5))=6
    ['10','6','9','3','+','-11','*','/','*','17','+','5','+'] 等价于 ((10*(6/((9+3)*-11)))+17)+5
    ```
    请表写函数calc_exp(exp)实现逆波兰表达式计算，exp的类型是数组
 * **/

import Stack from "../data-structure/Stack";

export function calcExp(exp) {
    const stack = new Stack();
    if (exp instanceof Array) {
        exp.forEach(item => {
            if (['+','-','*','/'].includes(item)) {
                // 为运算符时出栈两个数做运算，结果入栈
                const num1 = stack.pop();
                const num2 = stack.pop();
                // 拼成运算表达式
                const expStr = `${num2}${item}${num1}`;
                stack.push(eval(expStr));
            } else {
                // 为数字时入栈
                stack.push(item)
            }
        })
        // 最后栈中只有一个元素，即为运算结果
        return stack.top()
    }
    return false;
}
