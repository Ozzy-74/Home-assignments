"use strict";
class TestReport {
    reportStep(msg, status, snap) {
        console.log(`message ${msg}`);
        console.log(`status: ${status}`);
        if (snap !== undefined) {
            console.log(`Take screenshot: ${snap}`);
        }
    }
    demoReportStep() {
        this.reportStep("login successfull", "PASS");
        this.reportStep("Dashboard loaded", "PASS", true);
    }
}
const report = new TestReport();
report.demoReportStep();
