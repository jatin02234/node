const products  = require('../models/product');

exports.getProduct = (req, res, next) => {
    products.fetchAll( products => {
        res.render('shop/product-list', { prods: products, pageTitle: 'All Product', path: 'shop/product'});
    });
};

exports.getIndex = (req, res, next) => {
    products.fetchAll( products => {
    res.render('shop/index', { prods: products, pageTitle: 'Shop', path: '/'});
    })
};

exports.getCart = (req, res, next) => { 
    res.render('shop/cart', {  pageTitle: 'Your cart', path: '/cart'});
};

exports.getOrders = (req, res, next) => { 
    res.render('shop/order', {  pageTitle: 'Your order', path: '/order'});
};

exports.getCheckOut = (req, res, next) => { 
    res.render('shop/checkout', {  pageTitle: 'checkout', path: '/checkout'});
};