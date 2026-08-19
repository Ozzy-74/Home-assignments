class TestReport{

    reportStep(msg:string,status:string):void;

    reportStep(msg:string,status:string,snap:boolean):void;

    reportStep(msg:string,status:string,snap?:boolean):void{
        console.log(`message ${msg}`)
        console.log(`status: ${status}`)

         if(snap !== undefined){
            console.log(`Take screenshot: ${snap}`)
         }
    }

    demoReportStep():void{
        this.reportStep("login successful","PASS")
        this.reportStep("Dashboard loaded","PASS",true)
    }
}
const report = new TestReport()
report.demoReportStep()