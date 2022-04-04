const mongoose = require('mongoose');

mongoose.connect('mongodb://admin1:asdasdasd@localhost:27017/merncruds-mongoose?authSource=admin');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Server database terhubung'));