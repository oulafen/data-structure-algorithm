/**
 * 栈的特点：先进后出
 * 方法：push/pop/top/size/clear
 * **/
 export default class Stack {
    constructor() {
        this.stack = [];
    }
    // 入栈
    push(val) {
        this.stack.push(val);
        return this;
    }
    // 出栈
    pop() {
        return this.stack.pop();
    }
    // 栈顶元素
    top() {
        return this.stack[this.stack.length - 1];
    }
    // 栈大小
    size() {
        return this.stack.length;
    }
    // 清空栈内元素
    clear() {
        this.stack = [];
        return this;
    }
    // 是否为空
    isEmpty() {
        return this.stack.length === 0;
    }
};
