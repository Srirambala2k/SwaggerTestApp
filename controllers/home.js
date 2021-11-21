const {model} = require("mongoose")
const home = require("../models/home")

const GetAllHome = async(req,res)=>{
   var result = await home.find()
   res.status(200).json(result) 
} 

const GetHomesByFilter = async(req,res)=>{
   const {ownerName,sqfeet,beds,bath,price,place,contactNumber} =req.query
   const queryobj = {}
   console.log(req.query)
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

module.exports = {GetAllHome,GetHomesByFilter}

