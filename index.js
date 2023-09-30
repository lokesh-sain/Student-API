const express = require('express');
const app = express();

//Additional Things
const portfinder = require("portfinder");
require("dotenv").config();
app.use(express.json())

//Db Connection
const connect_db = require("./config/db_connection");
connect_db(); 

//Routes
app.use("/api/v1/",require("./routes/api_route"));

app.get("/",(request,response)=>{
    return response.send({"Message":"Request at /api/v1/"});
});

app.get("*",(request,response)=>{
    return response.send({"Message":"404 Not Found"})
})



//app Running 
portfinder.getPortPromise().then(port=>{
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`);
    });
}).catch(error=>{
    console.log(error);
});
