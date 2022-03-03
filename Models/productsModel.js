const mongodb = require('mongodb');
const {ObjectId} = require("mongodb");
const checkDb = require('./../Utils/database').checkDb;


class ProductsModel {

    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    insertProducts() {
        let db = checkDb();
        return db.collection('products').insert({
            title: this.title,
            price: this.price
        }).then(result => console.log(result))
            .catch(err => console.log(err))
    }

    static fetchProducts() {
        let db = checkDb();
        return db.collection('products').find()
            .toArray()
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch(err => console.log(err))
    }

    static deleteItem(id) {
        let db = checkDb();

        return db.collection('products').deleteOne({_id: new mongodb.ObjectId(id)})
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    static updateItem(id, title, price) {
        let db = checkDb();
        return db.collection('products').updateOne({_id: ObjectId(id)}, {$set: {price: price , title: title}})
            .then(res => console.log(res))
            .catch(err => console.log('err'))
    }
}


module.exports = ProductsModel;