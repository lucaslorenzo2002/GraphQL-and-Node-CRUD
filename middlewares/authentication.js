const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        const verify = jwt.verify(token, 'shhhhhhh');
        req.verifiedUser = verify.userId;
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {auth}