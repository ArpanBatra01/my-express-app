const jwt = require('jsonwebtoken');
const User = require('../models/userModal');
const AppError = require('../errors/AppError');


const protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) return next(new AppError('Not authorized', 401));

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) return next(new AppError('User not found', 404))
        console.log(">>>>", req.user)

        next();

    } catch (err) {
        return next(new AppError('Token failed or invalid', 401));
    }
};

module.exports = protect;
