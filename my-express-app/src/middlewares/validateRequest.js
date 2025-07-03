const {validationResult} = require('express-validator');
const AppError = require('../errors/AppError');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const firstError = errors.array()[0];
        throw new AppError(`${firstError.param}: ${firstError.msg}`, 422);

    }
    next();
};

module.exports = validateRequest;