const mongoose = require("mongoose")
const MenuSchema = new mongoose.Schema({
  menu_thumbnail:{
   type:String
  },
  menu_price:{
   type:String
  },
  menu_title:{
   type:String
  },
  menu_description:{
   type:String
  }
},{
 collection:"menu"
})
module.exports = mongoose.model("MenuSchema", MenuSchema)