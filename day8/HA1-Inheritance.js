"use strict";
class Browser {
    browserName;
    browserVersion;
    constructor(name, version) {
        this.browserName = name;
        this.browserVersion = version;
    }
    openURL() {
        console.log(`Opened URL IN: ${this.browserName}`);
    }
    closeBrowser() {
        console.log(`Closing the ${this.browserName} browser`);
    }
    navigateBack() {
        console.log(`Navigate back ${this.browserName}`);
    }
}
class chrome extends Browser {
    openIncognito() {
        console.log("Incognito mode opened");
    }
    clearCache() {
        console.log("Cache has been cleared");
    }
}
class Edge extends Browser {
    takeSnap() {
        console.log("Screenshot taken");
    }
    clearCookies() {
        console.log("Cookies has been cleared");
    }
}
class Safari extends Browser {
    readerMode() {
        console.log("Reader mode enabled");
    }
    fullScreenMode() {
        console.log("Full screen mode enabled");
    }
}
const chromeBrowser = new chrome("chrome", 1);
chromeBrowser.openURL();
chromeBrowser.openIncognito();
chromeBrowser.clearCache();
chromeBrowser.navigateBack();
chromeBrowser.closeBrowser();
const edgeBrowser = new Edge("edge", 2);
edgeBrowser.openURL();
edgeBrowser.takeSnap();
edgeBrowser.clearCookies();
edgeBrowser.navigateBack();
edgeBrowser.closeBrowser();
const safariBrowser = new Safari("safari", 3);
safariBrowser.openURL();
safariBrowser.readerMode();
safariBrowser.fullScreenMode();
safariBrowser.navigateBack();
safariBrowser.closeBrowser();
