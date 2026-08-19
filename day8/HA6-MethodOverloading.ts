class BasePage{
    findElement():void{
        console.log("Finding the element")
    }
    clickElement():void{
        console.log("Clicking the element")
    }
    enterText():void{
        console.log("entering the text")
    }
    performCommonTasks():void{
        console.log("PERFORMANCE TASK IN BASE")
    }
}

class LoginPage extends BasePage{
    override performCommonTasks(): void {
        console.log("PERFORMANCE TASK IN LOGIN")
    }
}

const basePage = new BasePage();

basePage.findElement()
basePage.clickElement();
basePage.enterText();
basePage.performCommonTasks();

const loginPage = new LoginPage();

loginPage.findElement();
loginPage.clickElement()
loginPage.enterText()
loginPage.performCommonTasks()

