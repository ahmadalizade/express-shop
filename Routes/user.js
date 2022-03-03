const express = require('express');
const router = express.Router();
const homeController = require('./../Controllers/HomeController');
const productController = require('./../Controllers/ProductsController');

router.get('/' , homeController.getProducts)
router.get('/category' , productController.Categories)


module.exports = router
