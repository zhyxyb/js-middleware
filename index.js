const mA = (ctx,next) => {
    console.log('pre A start')
    console.log(ctx)
    console.log('pre a finish')
    next(ctx)
    console.log('after a start')
    console.log(ctx)
    console.log('after A finish')
}

const mB = (ctx,next) => {
    console.log('pre B start')
    console.log(ctx)
    console.log('pre B finish')
    next(ctx)
    console.log('after B start')
    console.log(ctx)
    console.log('after B finish')
}
const mC = (ctx,next) => {
    console.log('pre C start')
    console.log(ctx)
    console.log('pre C finish')
    next(ctx)
    console.log('after C start')
    console.log(ctx)
    console.log('after C finish')
}

const f1 = (ctx) => {
    console.log('this is f1')
}
const f2 = (ctx) => {
    console.log('this is f2')
}
const f3 = (ctx) => {
    console.log('this is f3')
}
// let mds = [mA, mB, mC]
// let current=0

function next(ctx) {
    ctx.current++
    if (ctx.current < ctx.mds.length) {

        ctx.mds[ctx.current](ctx,next)

    }
    else {
        ctx.f(ctx)
    }
}
function start(ctx,f) {
    ctx.current=-1
    ctx.mds=[mA, mB, mC]
    ctx.f=f
    console.log(ctx.mds)
    // current = -1;
    next(ctx)
}

start({value:5},f2)
