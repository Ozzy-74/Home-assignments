"use strict";
class MySqlConnection {
    executeQuery() {
        console.log("Executing a query");
    }
}
class PlaywrightConnection extends MySqlConnection {
    connect() {
        console.log("Connected to mySql");
    }
    disconnect() {
        console.log("Disconnected from mySql");
    }
    executeUpdate() {
        console.log("Executing update");
    }
}
const mysql = new PlaywrightConnection();
mysql.connect();
mysql.executeQuery();
mysql.disconnect();
mysql.executeUpdate();
