"use strict";
class BasePage {
    findElement() {
        console.log("Finding the element");
    }
    clickElement() {
        console.log("Clicking the element");
    }
    enterText() {
        console.log("entering the text");
    }
    performCommonTasks() {
        console.log("PERFORMANCE TASK IN BASE");
    }
}
class LoginPage extends BasePage {
    performCommonTasks() {
        console.log("PERFORMANCE TASK IN LOGIN");
    }
}
const basePage = new BasePage();
basePage.findElement();
basePage.clickElement();
basePage.enterText();
basePage.performCommonTasks();
const loginPage = new LoginPage();
loginPage.findElement();
loginPage.clickElement();
loginPage.enterText();
loginPage.performCommonTasks();
