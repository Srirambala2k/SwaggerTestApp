const connectDB = require("../db/connect")
const Bike = require("../models/bike")

const bikeJSon = require("./bike.json")
require("dotenv").config()

console.log(process.env.MONGO_URI)

const start = async () => {
    try {    
      await connectDB("mongodb://localhost:27017/TestDB")  
      await Bike.deleteMany()
      await Bike.create(bikeJSon)
      console.log('Success!!!!')
      process.exit(0)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  start()
  