const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const product = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.send('lfnvjdnvsn')
    res.redirect('/');
});

exports.router = router;
exports.router = product;