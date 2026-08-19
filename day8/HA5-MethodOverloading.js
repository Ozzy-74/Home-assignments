"use strict";
class APIClient {
    sendRequest(endpoint, requestBody, requestStatus) {
        if (requestBody === undefined && requestStatus === undefined) {
            console.log(`Sending request to get ${endpoint}`);
        }
        else {
            console.log(`Sending request to get ${endpoint}`);
            console.log(`Request body: ${requestBody}`);
            if (requestStatus === true) {
                console.log(`Request was successful`);
            }
            else {
                console.log("Request was unsuccessful");
            }
        }
    }
    DemoSendRequest() {
        this.sendRequest("/user");
        this.sendRequest("/user/1", "name:krish", true);
    }
}
const api = new APIClient();
api.DemoSendRequest();
