/**
 * 队列
 * 特点：先进先出
 * 方法：enqueue/unqueue/size/head/tail/clear
 * **/

class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(val) {
        this.queue.push(val);
        return this;
    }
    unqueue() {
        const res = this.queue.splice(0, 1);
        return res && res[0];
    }
    size() {
        return this.queue.length;
    }
    head() {
        if (!this.isEmpty()) {
            return this.queue[0];
        }
        return null
    }
    tail() {
        if (!this.isEmpty()) {
            return this.queue[this.queue.length - 1];
        }
        return null;
    }
    clear() {
        this.queue = [];
        return this;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

// 测试
// const queue = new Queue()

// console.log('入列：', queue.enqueue(1).enqueue(2).enqueue(3))
// console.log('出列：', queue.unqueue(), queue)
// console.log('列头：', queue.head(), queue)
// console.log('列尾：', queue.tail(), queue)
// console.log('列大小：', queue.size())
// console.log('清空列：', queue.clear())

export default Queue;