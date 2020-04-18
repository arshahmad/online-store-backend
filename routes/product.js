const express = require('express');
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');
const { getProductById } = require('../controllers/product');

//all of params
router.param('userId', getUserById);
router.param('productId', getProductById);

