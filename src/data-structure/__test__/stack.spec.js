// 数据结构测试
import Stack from '../Stack';
import MinStack from '../MinStack';

const stack = new Stack();

describe('栈', () => {
    beforeEach(() => {
        stack.clear().push(1).push(2).push(3);
    });

    test('入栈', () => {
        expect(stack.stack).toMatchObject([1, 2, 3])
    });
    test('出栈', () => {
        expect(stack.pop()).toBe(3);
        expect(stack.stack).toMatchObject([1, 2]);
    });
    test('栈顶', () => {
        expect(stack.top()).toBe(3);
        expect(stack.stack).toMatchObject([1, 2, 3]);
    });
    test('大小', () => {
        expect(stack.size()).toBe(3);
    });
    test('清空', () => {
        expect(stack.clear().stack).toMatchObject([]);
    });
    test('是否为空', () => {
        expect(stack.isEmpty()).toBeFalsy();
    });
})

const minStack = new MinStack();
describe('栈', () => {
    beforeEach(() => {
        minStack.clear().push(1).push(2).push(3);
    });

    test('入栈', () => {
        expect(minStack.push(2).stack).toMatchObject([1, 2, 3, 2])
    });
    test('出栈', () => {
        expect(minStack.pop()).toBe(3);
        expect(minStack.stack).toMatchObject([1, 2]);
    });
    test('栈顶', () => {
        expect(minStack.top()).toBe(3);
        expect(minStack.stack).toMatchObject([1, 2, 3]);
    });
    test('大小', () => {
        expect(minStack.size()).toBe(3);
    });
    test('清空', () => {
        expect(minStack.clear().stack).toMatchObject([]);
    });
    test('是否为空', () => {
        expect(minStack.isEmpty()).toBeFalsy();
    });
    test('获取栈最小值', () => {// 1,2,3
        expect(minStack.min()).toBe(1); // min: 2,3,1
        expect(minStack.push(0).min()).toBe(0) // 1,2,3,0  min: 1,1,1,0
        expect(minStack.pop()).toBe(0); // 1,2,3
        expect(minStack.min()).toBe(1); // min:1,1,1

        expect(minStack.pop()).toBe(3); // 1,2
        expect(minStack.min()).toBe(1); // min:1,1

        expect(minStack.pop()).toBe(2); // 1
        expect(minStack.min()).toBe(1); // min:1

        expect(minStack.pop()).toBe(1); // 1
        expect(minStack.min()).toBeUndefined();

    });
})