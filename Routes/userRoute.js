const express = require("express");
const userRoute = express.Router();
const userController = require('../Controllers/userController');

// getUsersList Controller 
userRoute.get('/', userController.getUsersList);

// getUserByID Controller
userRoute.get('/:id', userController.getUserByID);

// loginUser Controller
userRoute.post('/login', userController.loginUser);

// createNewUser Controller
userRoute.post('/register', userController.createNewUser);

module.exports = userRoute;