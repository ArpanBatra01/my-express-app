const express = require('express');
const router = express.Router();

const protect = require('../middlewares/authMiddleware');
const { registerValidations, loginValidations } = require('../validations/authValidations');
const validateRequest = require ('../middlewares/validateRequest')

const authController = require('../controllers/authControllers');

router.post('/register', registerValidations, validateRequest, authController.registerUser);
router.post('/login', loginValidations, validateRequest, authController.loginUser);

router.get('/profile', protect, authController.getProfile);

module.exports = router;
