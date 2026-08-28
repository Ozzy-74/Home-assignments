import test from "@playwright/test";


test.describe("lead management", () => { 

    test("createlead",  async () => {
        console.log("create lead")
    });

test("editlead",  async () => {
        console.log("edit lead")
    });

    test.fixme("duplicate lead",async() =>{
        console.log("duplicate lead")
    })

    test.fail("delete lead",async() =>{
        console.log("lead deleted")
        throw new Error("failed due to assertion")
    })
});

