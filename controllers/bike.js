const {model} = require("mongoose")
const bike = require("../models/bike")

const GetAllBike = async(req,res)=>{
   var result = await bike.find()
   res.status(200).json(result) 
} 


const GetBikeByFilter = async(req,res)=>{
   const {product_id,name,brand,cc,topspeed,price} = req.query
   const queryobj = {}
   console.log(req.query)
   if(product_id){
      queryobj.product_id = product_id
   }
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

const AddBike = async(req,res)=>{
   var result = await bike.insertMany(req.body) 
   res.status(200).json(result)  
}

const UpdateBike = async(req,res)=>{
   console.log(req.body)
   var result = await bike.updateOne(req.body)
   res.status(200).json(result)
}

const DeleteBike = async(req,res)=>{
   const queryobject = {};
   queryobject.product_id = req.params.product_id
   console.log(queryobject)
   var result = await bike.deleteOne(queryobject)
   res.status(200).json(result)
}



module.exports = {GetAllBike,GetBikeByFilter,AddBike,UpdateBike,DeleteBike}