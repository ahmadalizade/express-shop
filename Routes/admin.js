const express = require('express');
const router = express.Router();
const homeController = require('./../Controllers/HomeController');
const productController = require('./../Controllers/ProductsController');

router.get('/add-product' , productController.addProduct);
router.post('/add-product' , productController.postAddProduct);
router.get('/products' , productController.adminProducts);


router.post('/products' , productController.removeProduct);
router.post('/update' , productController.updateProduct);



module.exports = router;