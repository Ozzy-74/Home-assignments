import dotenv from "dotenv"

const fileName = process.env.terminalEnvVariable
const result = dotenv.config({path: `K://Testleaf-working//data//${fileName}_LF.env`})

if(result.error){
    console.log("env file not loaded")
}
else{
    console.log("env file loaded successfully")
}

console.log(process.env.BASE_URL,process.env.ADMIN_USERNAME,process.env.HOSTNAME)

