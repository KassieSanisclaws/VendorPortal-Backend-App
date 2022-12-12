const express = require("express");
const userRoutes = express.Router();
const userController = require('../Controllers/userController');

// getUsersList Controller 
userRoutes.get('/', userController.getUsersList);

// getUserByID Controller
userRoutes.get('/:id', userController.getUserByID);

// loginUser Controller
userRoutes.post('/login', userController.loginUser);

// createNewUser Controller
userRoutes.post('/register', userController.createNewUser);

module.exports = userRoutes;