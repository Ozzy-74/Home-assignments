"use strict";
class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`clicking the selector: ${this.selector}`);
    }
    focus() {
        console.log(`focusing the selector: ${this.selector}`);
    }
}
class Button extends WebComponent {
    click() {
        console.log(`Button clicked ${this.selector}`);
    }
}
class TextInput extends WebComponent {
    value = "";
    enterText(text) {
        this.value = text;
        console.log(`Entering the text ${text} into ${this.selector}`);
    }
}
function testComponents() {
    const btn = new Button("#loginButton");
    const input = new TextInput("#username");
    btn.click();
    btn.focus();
    input.enterText("krishna");
    input.focus();
    input.click();
    console.log(`TextInput values: ${input.value}`);
}
testComponents();
