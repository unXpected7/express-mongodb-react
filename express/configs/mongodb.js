const {MongoClient} = require('mongodb');

const url = 'mongodb://admin1:asdasdasd@localhost:27017?authSource=admin'
const client = new MongoClient(url); 

(async () => {
    try {
        await client.connect();
    console.log('koneksi ke mongodb berhasil')
    } catch(e) {
        console.log(e)
    }
})();

const db = client.db('mern-cruds');

module.exports = db;