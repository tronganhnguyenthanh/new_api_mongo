const serviceController = require("../controllers/services.controller")
const express = require("express")
const router = express.Router()
// Api for service coffee
router.post("/service/add", serviceController.addService)
router.get("/service/list", serviceController.getService)
router.put("/service/update/:id", serviceController.updateService)
router.delete("/service/delete/:id", serviceController.deleteService)
module.exports = router