class TestData{
    enterCredentials():void{
        console.log("Entering the credentials")
    }
     navigateToHomePage():void{
        console.log("Navigate to homepage")
     }
}

class LoginTestData extends TestData{
    enterUsername():void{
        console.log("entering the username")
    }
    enterPassword() :void{
        console.log("entering the password")
    }
}

const testdata1 = new TestData()

testdata1.enterCredentials();
testdata1.navigateToHomePage();

const login= new LoginTestData();
login.enterCredentials();
login.enterUsername();
login.enterPassword();
login.navigateToHomePage()
