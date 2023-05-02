const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (id) => {
    return jwt.sign({userId: id}, 'shhhhhhh', {expiresIn: 86400})
}

module.exports = generateToken