const mongoose = require("mongoose");

const connect_db =()=>{
      mongoose.connect(process.env.MONGO_CONNECTION_URL);

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected");
    });

    mongoose.connection.on('error',(error)=>{
        console.log(error);
    });

    mongoose.connection.on('disconnected',(error)=>{
        console.log("Database Disconnected...");
    });
}

module.exports = connect_db;