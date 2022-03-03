const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/avalkala';
let db;

const mongoConnect = (callback) => {
    MongoClient.connect(url)
        .then((client) => {
            console.log("Connect!")
            db = client.db()
            callback()
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const checkDb = () => {
    if (db) {
        return db;
    }

    throw 'Not Found Db';
}


exports.mongoConnect = mongoConnect;
exports.checkDb = checkDb;
