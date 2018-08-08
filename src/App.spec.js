import delay from 'redux-saga';

// Async demo
it("async test 1", done=>{
    setTimeout(done, 100); //max timeout 5000
});

it("async test 2", ()=>{
    return new Promise(resolve=>setTimeout(resolve, 1500));
});

it("async test 3",async ()=>{
    async ()=>await delay(100)
});