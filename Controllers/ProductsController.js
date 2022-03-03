const productModels = require('../Models/productsModel');

exports.Categories = (req, res, next) => {
    productModels.fetchProducts()
        .then((products) => {
            res.render('category', {
                titlePage: 'دسته بندی', products: products
            })
        })
}

exports.addProduct = (req, res) => {
    res.render('admin/add-product', {
        titlePage: 'افزودن محسول'
    })
}

exports.postAddProduct = (req, res) => {
    let products = new productModels(req.body.title, req.body.price)
    products.insertProducts();
    res.redirect('/');
}

exports.adminProducts = (req, res) => {
    productModels.fetchProducts()
        .then((result) => {
            res.render('admin/products', {
                titlePage: 'محصولات',
                products: result
            })
        })
}

exports.removeProduct = (req, res) => {
    let productID = req.body.productId;
    productModels.deleteItem(productID)
        .then(() => {
            console.log("Deleted!")
            res.redirect('/admin/products')
        })
        .catch(err => console.log(err))
}


exports.updateProduct = (req , res) => {
    let productID = req.body.productUpdated;
    let productTitle = req.body.productTitle;
    let productPrice = req.body.productPrice;
    productModels.updateItem(productID , productTitle , productPrice)
        .then(() => {
            console.log("update.ejs!")
            res.redirect('/admin/products')
        })
        .catch(err => console.log('err'))
}