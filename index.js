const fA = (ctx,next) => {
    console.log('pre A start')
    console.log(ctx)
    console.log('pre a finish')
    next(ctx)
    console.log('after a start')
    console.log(ctx)
    console.log('after A finish')
}

const fB = (ctx,next) => {
    console.log('pre B start')
    console.log(ctx)
    console.log('pre B finish')
    next(ctx)
    console.log('after B start')
    console.log(ctx)
    console.log('after B finish')
}
const fC = (ctx,next) => {
    console.log('pre C start')
    console.log(ctx)
    console.log('pre C finish')
    next(ctx)
    console.log('after C start')
    console.log(ctx)
    console.log('after C finish')
}

const ff = (ctx) => {
    console.log('this is ff')
}

let mds = [fA, fB, fC]
let current=0

function next(ctx) {
    current++
    if (current < mds.length) {
         mds[current](ctx,next)
    }
    else {
        ff(ctx)
    }
}
function start(ctx) {
     current = -1;
    next(ctx)
}

start(5)
