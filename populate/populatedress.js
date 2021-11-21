const connectDB = require("./db/connect")

const dress = require("./models/dress")

const dressJson = require("./dress.json")

require("dotenv").config()
const start = async () => {
    try {    
      await connectDB("mongodb://localhost:27017/TestDB")  
      await dress.deleteMany()
      await dress.create(dressJson)
      console.log('Success!!!!')
      process.exit(0)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  start()
