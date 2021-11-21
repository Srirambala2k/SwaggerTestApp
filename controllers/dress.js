const {model} = require("mongoose")
const dress = require("../models/dress")

const GetAllDress = async(req,res)=>{
   var result = await dress.find()
   res.status(200).json(result) 
} 


const GetDressByFilter = async(req,res)=>{
   const {name,size,colour,sex,price,stocks} = req.query
   const queryobj = {}
   if(name){
      queryobj.name = name
   }
   if(size){
      queryobj.size = size
   }
   if(colour){
      queryobj.colour = colour
   }
   if(sex){
      queryobj.sex = sex
   }
   if(id){
      queryobj.id = id
   }
   if(price){
      queryobj.price = price
   }
   if(stocks){
       queryobj.stocks = stocks
   }
   
   
   var result = await dress.find(queryobj)
   res.status(200).json(result) 
}

const AddDress = async(req,res)=>{
   var result = await dress.insertMany(req.body) 
   res.status(200).json(result)  
}

const UpdateDress = async(req,res)=>{
   console.log(req.body)
   var result = await dress.updateOne(req.body)
   res.status(200).json(result)
}

const DeleteDress = async(req,res)=>{
   const queryobject = {};
   queryobject.product_id = req.params.product_id
   console.log(queryobject)
   var result = await dress.deleteOne(queryobject)
   res.status(200).json(result)
}

module.exports = {GetAllDress,GetDressByFilter,AddDress,UpdateDress,DeleteDress}