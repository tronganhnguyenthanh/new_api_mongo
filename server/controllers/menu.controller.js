const menuModel = require("../models/menu.model")
const addMenu = async (req, res) => {
  try {
    let new_menu = new menuModel(req.body)
    await new_menu.save()
    res.json({message:"Menu added successfully"})
  }catch (error){
    res.status(400).json({message:error})
  }
}
const getMenu = async (req, res) => {
   console.log(req.body)
   try{
     let display = await menuModel.find()
     res.json(display) 
   }catch (error) {
     res.status(400).json({message:error})
  }
}
const updateMenu = async (req, res) => {
   try {
     let _id = req.params.id
     let update_body = req.body
     let updated = {new:true}
     await menuModel.findByIdAndUpdate(_id, update_body, updated)
     res.json({message:"Menu updated successfully"})
   }catch (error) {
     res.status(400).json({message:error})
  }
}
const deleteMenu = async (req, res) => {
   try {
     let _id = req.params.id
     await menuModel.findByIdAndDelete(_id)
     res.json({message:"Menu deleted successfully"})
   }catch (error) {
     res.status(400).json({message:error})
  }
}
module.exports = {
  addMenu,
  getMenu,
  updateMenu,
  deleteMenu
}