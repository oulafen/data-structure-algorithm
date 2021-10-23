/**
 * 栈的特点：先进后出
 * 方法：push/pop/top/size/clear
 * **/
export default class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    // 入栈
    push(val) {
        // 插入minStack，保证栈顶是最小数
        const curMin = this.min();
        if (this.isEmpty() || this.min() >= val) {
            this.minStack.push(val)
        } else {
            this.minStack.push(curMin);
        }
        this.stack.push(val);
        return this;
    }
    // 出栈
    pop() {
        const res = this.stack.pop();
        // 出栈时，最小栈也相应的更新
        this.minStack.pop();
        return res;
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
        this.minStack = [];
        return this;
    }
    // 是否为空
    isEmpty() {
        return this.stack.length === 0;
    }
    // 最小数
    min() {
        return this.minStack[this.minStack.length - 1]
    }
};