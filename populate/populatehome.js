const connectDB = require("../db/connect")

const home = require("../models/home")

const homejson = require("./home.json")

require("dotenv").config()

const start = async () =>{
    try{
        await connectDB("mongodb://localhost:27017/TestDB")
        await home.deleteMany()
        await home.create(homejson)
        console.log('success!!')
        process.exit(0)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}

start()
