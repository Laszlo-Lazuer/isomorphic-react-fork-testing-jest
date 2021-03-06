describe("The question list", ()=>{
    beforeEach(()=>{
        console.log("Before each!");
    });
    beforeAll(()=>{
        console.log("Before all!");
    });

    it ("should display a list of items", ()=>{
      expect(40 + 2).toEqual(42);
    });

    it ("should be the meaning of life", ()=>{
        expect(40 + 2).toEqual(42);
    });

    afterEach(()=>{
        console.log("After each!");
    });

    afterAll(()=>{
        console.log("After all!");
    });

    it.only("should display a list of items", ()=>{  //Isolate test
        expect(40 + 2).toEqual(42);
      });

    it.skip ("should be the meaning of life", ()=>{ //Skip Test
        expect(40 + 2).toEqual(43);
    });
});