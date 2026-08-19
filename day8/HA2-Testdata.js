"use strict";
class TestData {
    enterCredentials() {
        console.log("Entering the credentials");
    }
    navigateToHomePage() {
        console.log("Navigate to homepage");
    }
}
class LoginTestData extends TestData {
    enterUsername() {
        console.log("entering the username");
    }
    enterPassword() {
        console.log("entering the password");
    }
}
const testdata1 = new TestData();
testdata1.enterCredentials();
testdata1.navigateToHomePage();
const login = new LoginTestData();
login.enterCredentials();
login.enterUsername();
login.enterPassword();
login.navigateToHomePage();
