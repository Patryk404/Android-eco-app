const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/',productController.getProducts);

//router.post('/new-product',productController.newProduct);

module.exports =router;