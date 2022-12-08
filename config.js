var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
let db;
let connection;

async function connectDb(req,res,next){

    try {
        connection = await mongoClient.connect("mongodb://127.0.0.1");
        db = await connection.db("Password_reset");
        return db

    } catch (error) {
        res.json({message : "Something went wrong in connecting"})
    }
}

async function closeConnection(req,res,next){

    try {
        if(connection){
            await connection.close()
        }else{
            console.log("No Connection")
        }
    } catch (error) {
        res.json({message : "Something went wrong in Disconnecting"})
    }
}

module.exports = {connectDb,connection,db,closeConnection}