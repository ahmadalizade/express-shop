const productModels = require('../Models/productsModel');

exports.getProducts = (req, res, next) => {
    res.render('index', {
        titlePage: 'صفحه اصلی',
    })
}
