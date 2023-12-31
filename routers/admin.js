const express = require('express');
const adminControllers = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminControllers.getAddProduct);

router.get('/products', adminControllers.getProduct);

router.post('/add-product', adminControllers.postAddProduct);

module.exports = router;