const express = require('express')
const AdminController = require('controller/admin.controller')
const router = express.Router()

const adminController = new AdminController();
adminController.register(router)

module.exports = router;
