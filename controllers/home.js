const {model} = require("mongoose")
const home = require("../models/home")

const GetAllHome = async(req,res)=>{
   var result = await home.find()
   res.status(200).json(result) 
} 

const GetHomesByFilter = async(req,res)=>{
   const {product_id,ownerName,sqfeet,beds,bath,price,place,contactNumber} =req.query
   const queryobj = {}
   console.log(req.query)
   if(product_id){
      queryobj.product_id =   product_id
   }
   if(ownerName){
      queryobj.ownerName = ownerName
   }
   if(sqfeet){
      queryobj.sqfeet = sqfeet
   }
   if(beds){
      queryobj.beds = beds
   }
   if(bath){
      queryobj.bath = bath
   }
   if(price){
      queryobj.price = price
   }
   if(place){
      queryobj.place = place
   }
   if(contactNumber){
      queryobj.contactNumber = contactNumber
   }

   var result = await home.find(queryobj)
   res.status(200).json(result) 
} 

const AddHome = async(req,res)=>{
   var result = await home.insertMany(req.body) 
   res.status(200).json(result)  
}

const UpdateHome = async(req,res)=>{
   console.log(req.body)
   var result = await home.updateOne(req.body)
   res.status(200).json(result)
}

const DeleteHome = async(req,res)=>{
   const queryobject = {};
   queryobject.product_id = req.params.product_id
   console.log(queryobject)
   var result = await home.deleteOne(queryobject)
   res.status(200).json(result)
}

module.exports = {GetAllHome,GetHomesByFilter,AddHome,UpdateHome,DeleteHome}

