class APIClient{

    sendRequest(endpoint:string):void;
    sendRequest(endpoint:string,requestBody:string,requestStatus:boolean):void;


    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void{

        if(requestBody === undefined && requestStatus === undefined){
            console.log(`Sending request to get ${endpoint}`)
        }
        else{
            console.log(`Sending request to get ${endpoint}`)
            console.log(`Request body: ${requestBody}`)

            if(requestStatus === true){
                console.log(`Request was successful`)
            }
            else{
                console.log("Request was unsuccessful")
            }
        }
    }
    DemoSendRequest():void{
        this.sendRequest("/user")
        this.sendRequest("/user/1","name:krish",true)
    }

}

const api = new APIClient()

api.DemoSendRequest()