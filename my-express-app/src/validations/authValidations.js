const { check } = require('express-validator');

const registerValidations = [

    check('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be atleast 3 characters'),

    check('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid Email'),

    check('password')
        .notEmpty().withMessage('password is required')
        .isLength({ min: 6 }).withMessage('password must be atleast 6 characters'),

];  

const loginValidations = [

    check('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid Email'),

    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('password must be atleast 6 characters'),

];


// const validate = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(422).json({
//             errors: errors.array()
//         });
//     }
//     next();

// };

module.exports = {
    registerValidations,
    loginValidations,
    
}
