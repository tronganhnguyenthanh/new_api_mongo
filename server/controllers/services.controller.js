const serviceModel = require("../models/services.model")
const addService = async (req, res) => {
  try {
    let new_service = new serviceModel(req.body)
    await new_service.save()
    res.json({message:"Service added successfully"})
  }catch (error){
    res.status(400).json({message:error})
  }
}
const getService = async (req, res) => {
   console.log(req.body)
   try{
     let display = await serviceModel.find()
     res.json(display) 
   }catch (error) {
     res.status(400).json({message:error})
  }
}
const updateService = async (req, res) => {
   try {
     let _id = req.params.id
     let update_body = req.body
     let updated = {new:true}
     await serviceModel.findByIdAndUpdate(_id, update_body, updated)
     res.json({message:"Service updated successfully"})
   }catch (error) {
     res.status(400).json({message:error})
  }
}
const deleteService = async (req, res) => {
   try {
     let _id = req.params.id
     await serviceModel.findByIdAndDelete(_id)
     res.json({message:"Service deleted successfully"})
   }catch (error) {
     res.status(400).json({message:error})
  }
}
module.exports = {
  addService,
  getService,
  updateService,
  deleteService
}