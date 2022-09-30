const menuController = require("../controllers/menu.controller")
const express = require("express")
const router_v1_menu = express.Router()
// Api for menu coffee
router_v1_menu.post("/menu/add", menuController.addMenu)
router_v1_menu.get("/menu/list", menuController.getMenu)
router_v1_menu.put("/menu/update/:id", menuController.updateMenu)
router_v1_menu.delete("/menu/delete/:id", menuController.deleteMenu)
module.exports = router_v1_menu