const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/penjualan', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('koneksi mongodb dengan mongoose success'))

module.exports = db