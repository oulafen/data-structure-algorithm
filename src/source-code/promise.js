/**
 * 实现一个promise方法，
 * promise.resolve(value)
 * promise.reject(reason)
 * promise.then(onFulfilled, onRejected)
 * 
 * TODO: 
 * Promise.all
 * Promise.race
 * 
 * 
 */

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(executor) {
        this.status = PENDING; // 状态只能从PENDING=>FULFILLED，或PENDING=>REJECTED
        this.value = undefined; // 存储成功返回
        this.reason = undefined; // 存储失败返回

        // 存储异步回调
        this.resolveCallbackFns = [];
        this.rejectCallbackFns = [];
        const resolve = (val) => {
            // 状态为PENDING时才执行更新状态，以免更新多次
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = val;
                this.resolveCallbackFns.forEach(fn => fn());
            }
            return this
        };
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.rejectCallbackFns.forEach(fn => fn());
            }
            return this;
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            this.reason = err;
        }

        this.resolve = resolve;
        this.reject = reject;

        // this.all = (promises) => {
        //     let count = 0;
        //     let results = [];
        //     for(let i = 0; i < promises.length; i++) {
        //         const p = promises[i];
        //         p.then((val) => {
        //             results[index] = val;
        //             count ++;
        //             if (count === promises.length) {
        //                 this.resolve(results);
        //             }
        //         }).catch((reason) => {
        //             this.reject(reason)
        //         })
        //     }
        //     return this;
        // }

    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === REJECTED) {
            onRejected(this.reason);
        }
        if (this.status === PENDING) {
            this.resolveCallbackFns.push(() => {
                onFulfilled(this.value);
            });
            this.rejectCallbackFns.push(() => {
                onRejected(this.reason);
            });
        }
        return this;
        // return new MyPromise((resolve, reject) => {
        //     if (this.status === FULFILLED) {
        //         resolve(this.value);
        //     }
        //     if (this.status === REJECTED) {
        //         reject(this.reason);
        //     }
        // });
    }
    catch (onRejected) {
        if (this.status === REJECTED) {
            onRejected(this.reason);
        }
        if (this.status === PENDING) {
            this.rejectCallbackFns.push(() => {
                onRejected(this.reason);
            });
        }
        return this;
    }
    
    finally(callback) {
        callback && callback();
    }

    // all(promises) {
    //     let count = 0;
    //     let results = [];
    //     for(let i = 0; i < promises.length; i++) {
    //         const p = promises[i];
    //         p.then((val) => {
    //             results[index] = val;
    //             count ++;
    //             if (count === promises.length) {
    //                 this.resolve(results);
    //             }
    //         }).catch((reason) => {
    //             this.reject(reason)
    //         })
    //     }
    //     return this;
    // }

}


// 测试
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000)
})
const p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 2000)
})
promise.then((res) => {
    console.log('success1', res)
    return 11
}).then((res) => {
    console.log('success2', res)
}).catch(err => {
    console.log('catch err', err)
})

p2.then((res) => {
    console.log('success2', res)
}).finally(() => {
    console.log('finally');
})

// MyPromise.all([promise, p2]).then((res) => {
//     console.log('all success', res);
// }).catch((err) => {
//     console.log('all err', err);
// })