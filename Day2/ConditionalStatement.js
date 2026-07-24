//a
function launchBrowser(BrowserName){
    if(BrowserName === "Chrome"){
        console.log('Chrome browser launched!!')
    }

    else{
        console.log("Chrome failed to open")
    }
}

launchBrowser("Chrome");

//b
function runTests(testType){
    switch(testType){

        case "smoke": 
             console.log("Smoke testing done")
        break;

        case "sanity":
            console.log("Sanity done");
            break;
        case "regression":
            console.log("Regression done")
            break;
        default:
            console.log("Smoke test running")
    }
}

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("functional");

