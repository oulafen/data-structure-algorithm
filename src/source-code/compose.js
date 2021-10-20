/** 题目需求
    let middleware = []
    middleware.push((next) => {
        console.log(1)
        next()
        console.log(1.1)
    })
    middleware.push((next) => {
        console.log(2)
        next()
        console.log(2.1)
    })
    middleware.push((next) => {
        console.log(3)
        next()
        console.log(3.1)
    })

    let fn = compose(middleware)
    fn()
    // 1
    // 2
    // 3
    // 3.1
    // 2.1
    // 1.1
    实现compose函数
**/

// 递归实现，其实是模拟洋葱模型
function compose(middlewares) {
    let i = 0;
    const next = () => {
        i++;
        if (i < middlewares.length) {
            middlewares[i](next);
        }
    }
    return () => middlewares[i](next)
}

let middleware = []
middleware.push((next) => {
    console.log(1)
    next()
    console.log(1.1)
})
middleware.push((next) => {
    console.log(2)
    next()
    console.log(2.1)
})
middleware.push((next) => {
    console.log(3)
    next()
    console.log(3.1)
})

let fn = compose(middleware)
fn()
// /*
// 1
// 2
// 3
// 3.1
// 2.1
// 1.1
// */
//实现compose函数