class WebComponent{
    selector:string;

    constructor(selector:string){
        this.selector = selector
    }

    click():void{
        console.log(`clicking the selector: ${this.selector}`)

    }

    focus():void{
        console.log(`focusing the selector: ${this.selector}`)
    }
}

class Button extends WebComponent{
    override click(): void {
        console.log(`Button clicked ${this.selector}`)
    }
}

class TextInput extends WebComponent{
    value:string = ""

    enterText(text:string):void{
        this.value = text;
        console.log(`Entering the text ${text} into ${this.selector}`)
    }

}

function  testComponents(){

    const btn = new Button("#loginButton");
    const input = new TextInput("#username")

    btn.click()
    btn.focus()

    input.enterText("krishna")
    input.focus()
    input.click()

    console.log(`TextInput value: ${input.value}`)
}

testComponents();