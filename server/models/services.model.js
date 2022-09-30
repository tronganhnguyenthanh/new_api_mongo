const mongoose = require("mongoose")
const ServiceSchema = new mongoose.Schema({
  service_thumbnail:{
   type:String
  },
  service_title:{
   type:String
  },
  service_description:{
   type:String
  }
},{
 collection:"services"
})
module.exports = mongoose.model("ServiceSchema", ServiceSchema)
