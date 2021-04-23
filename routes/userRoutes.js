
const express = require('express');

var myctrl = require('../controller/userController');


var rotues=express.Router();

rotues.post('/add',myctrl.addCompany);

rotues.post('/addcompany',myctrl.mycompany);
rotues.post('/addproduct',myctrl.myproduct);

rotues.get('/product/:pid',myctrl.getproduct);

module.exports=rotues;