interface DatabaseConnection{
    connect():void
    disconnect():void
    executeUpdate():void

}

abstract class MySqlConnection implements DatabaseConnection{
    abstract connect(): void
    abstract disconnect(): void
    abstract executeUpdate(): void

    executeQuery():void{
        console.log("Executing a query")
    }
}

class PlaywrightConnection extends MySqlConnection{
    connect(): void {
        console.log("Connected to mySql")
    }
    disconnect(): void {
        console.log("Disconnected from mySql")
    }
    executeUpdate(): void {
        console.log("Executing update")
    }
}

const mysql = new PlaywrightConnection()
mysql.connect();
mysql.executeQuery();
mysql.disconnect();
mysql.executeUpdate();