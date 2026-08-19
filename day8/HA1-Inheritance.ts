class Browser{
    browserName:string
    browserVersion:number

    constructor(name:string, version:number){
        this.browserName = name;
        this.browserVersion = version;
    }
    openURL():void{
        console.log(`Opened URL IN: ${this.browserName}`)
    }
     closeBrowser():void{
        console.log(`Closing the ${this.browserName} browser`)
     } 

     navigateBack():void{
        console.log(`Navigate back ${this.browserName}`)
     }
}

class chrome extends Browser{
    openIncognito():void{
        console.log("Incognito mode opened")
    } 
    
     clearCache():void{
        console.log("Cache has been cleared")
     }

}

class Edge extends Browser{
    takeSnap():void{
        console.log("Screenshot taken")
    }
    clearCookies():void{
        console.log("Cookies has been cleared")
    }

}

class Safari extends Browser{
    readerMode():void{
        console.log("Reader mode enabled")
    }
    fullScreenMode():void{
        console.log("Full screen mode enabled")
    }

}

const chromeBrowser = new chrome("chrome",1)
chromeBrowser.openURL();
chromeBrowser.openIncognito();
chromeBrowser.clearCache();
chromeBrowser.navigateBack();
chromeBrowser.closeBrowser();

const edgeBrowser = new Edge("edge",2)
edgeBrowser.openURL();
edgeBrowser.takeSnap();
edgeBrowser.clearCookies();
edgeBrowser.navigateBack();
edgeBrowser.closeBrowser();

const safariBrowser = new Safari("safari",3)
safariBrowser.openURL();
safariBrowser.readerMode();
safariBrowser.fullScreenMode();
safariBrowser.navigateBack();
safariBrowser.closeBrowser()