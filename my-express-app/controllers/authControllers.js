const authService = require('../services/authServices');

const registerUser = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await authService.login(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const getProfile = (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'User not authorized' });
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
