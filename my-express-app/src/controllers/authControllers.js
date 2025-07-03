const AppError = require('../errors/AppError');
const authService = require('../services/authServices');

const registerUser = async (req, res, next) => {


    try {

        const user = await authService.register(req.body);
        res.status(201).json({ message: 'User registered successfully', user });

    } catch (error) {
        next(new AppError(error.message, 400));
    }
};

const loginUser = async (req, res, next) => {

    try {

        const user = await authService.login(req.body);
        res.status(200).json(user);

    } catch (error) {
        next(new AppError(error.message, 401));

    }
};

const getProfile = (req, res, next) => {
    if (!req.user) {
        return next(new AppError('User not authorized', 401));
    }

    res.status(200).json({
        message: 'Welcome to your profile!',
        user: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            createdAt: req.user.createdAt,
        }
    });
};

module.exports = {
    registerUser,
    loginUser,
    getProfile
};
