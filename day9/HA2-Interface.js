"use strict";
class Connection {
    connect() {
        console.log("Connection made to data base");
    }
    disconnect() {
        console.log("Connection is disconnected");
    }
    executeUpdate() {
        console.log("Executing update");
    }
}
const database = new Connection();
database.connect();
database.executeUpdate();
database.disconnect();
