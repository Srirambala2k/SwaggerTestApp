const {model} = require("mongoose")
const bike = require("../models/bike")

const GetAllBike = async(req,res)=>{
   var result = await bike.find()
   res.status(200).json(result) 
} 


const GetBikeByFilter = async(req,res)=>{
   const {name,brand,cc,topspeed,price} = req.query
   const queryobj = {}
   console.log(req.query)
   if(name){
      queryobj.name = name
   }
   if(brand){
      queryobj.brand = brand
   }
   if(cc){
      queryobj.cc = cc
   }
   if(topspeed){
      queryobj.topspeed = topspeed
   }
   if(price){
      queryobj.price = price
   }
   
   var result = await bike.find(queryobj)
   res.status(200).json(result) 
}


module.exports = {GetAllBike,GetBikeByFilter}