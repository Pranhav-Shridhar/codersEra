// Compare Async/Await and Generators usage to achive same functionality

// Generator function are executed yield by yield i.e one yield-expression at a time by its iterator (the next method) where as Async-await, they are executed sequential await by await.
// Async/await makes it easier to implement a particular use case of Generators.
// The return value of Generator is always {value: X, done: Boolean} where as for Async function it will always be a promise that will either resolve to the value X or throw an error.
// Async function can be decomposed into Generator and promise implementation

// An async function
async function init() { const res1 = await doTask1();
    console.log(res1);
    const res2 = await doTask2(res1); console.log(res2);
    const res3 = await doTask3(res2);
    console.log(res3);
    return res3;
    }
    init();

    // This function executes a generator. 
    function runner(genFn) {
    const itr = genFn();
    function run(arg) {
    let result = itr.next(arg);

    if (result.done) {
    return result.value;
    
} else {
    return Promise.resolve(result.value).then(run);
    }
    return run();
    }

    // Call runner with an inline generator function.
    runner(function* () { 
        const res1= yield doTask1();
    console.log(res1);
    const res2 = yield doTask2(res1);
    console.log(res2);
    const res3 = yield doTask3(res2);
    console.log(res3);
    return res3;
    });