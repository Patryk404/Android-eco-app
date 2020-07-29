const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/',productController.getProducts);

router.get('/product',productController.getProduct);

//router.post('/new-product',productController.newProduct);

module.exports =router;