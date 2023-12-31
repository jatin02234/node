const products  = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.status(200).render('add-product', { pageTitle: 'Add Product',  path: 'admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    const product = new products(req.body.title)
    product.save()
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    products.fetchAll( products => {
        res.render('shop', { prods: products, pageTitle: 'Shop', path: '/'});
    });
};