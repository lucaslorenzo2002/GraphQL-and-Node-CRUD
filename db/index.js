const mongoose = require('mongoose');
const connection = async() => {
    await mongoose.connect('mongodb://localhost/test');
    console.log('mongoose conectado');
}
module.exports = {connection}
