const express = require("express")
const router = express.Router()

const User = require("../models/user.model")

const crudController = require("./crud.controller")

module.exports=router