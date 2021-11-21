require("dotenv").config()
const express = require("express")
const connectDB = require("./db/connect")
const dressRouter = require("./routers/dress")

const swaggerUI= require("swagger-ui-express");
const swaggerJsDoc=require("swagger-jsdoc");

const options={
    definition:{
      openapi: "3.0.0",
      info:{
        title: "Library API",
        version:"1.0.0",
        description:"dress Test API"
      },
      servers:[
        {
        url:"http://localhost:5000"
        }
      ]    
    },
    apis:["./routers/*.js"]
  }
const specs= swaggerJsDoc(options);

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))
app.use("/api/dress",dressRouter);

app.use(express.json());

const start = async (req,res) =>{
    try{
        await connectDB("mongodb://localhost:27017/TestDB")
        app.listen(port,() => console.log(`Server is listening port ${port}...`));
    }
    catch(error){
        console.log(error);
    }
};

start();