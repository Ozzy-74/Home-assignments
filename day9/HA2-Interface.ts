interface DatabaseConnection{
    connect():void
    disconnect():void
    executeUpdate() :void
}

class Connection implements DatabaseConnection{
     connect(): void {
         console.log("Connection made to data base")
     }
     disconnect(): void {
         console.log("Connection is disconnected")
     }
     executeUpdate(): void {
         console.log("Executing update")
     }
}

const database = new Connection()
database.connect()
database.executeUpdate()
database.disconnect();
