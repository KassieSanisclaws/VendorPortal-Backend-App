const express = require("express");
const vendorRoute = express.Router();
const vendorController = require("../Controllers/vendorController");

//getVendorsList: Controller.//
vendorRoute.get("/", vendorController.getVendorsList);

//getVendorByID: Controller.//
vendorRoute.get("/:id", vendorController.getVendorByID);

//loginVendor: Controller.//
vendorRoute.post("/login", vendorController.loginVendor);

module.exports = vendorRoute; 