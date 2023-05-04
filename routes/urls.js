const express = require('express')
const AdminController = require('../controller/admin.controller')
const UserController = require('../controller/customer.controller')

const router = express.Router()

const adminController = new AdminController();
adminController.register(router)

const userController = new UserController();
userController.register(router)

module.exports = router;
