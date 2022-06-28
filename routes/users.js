const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/CatchAsync')
const User = require('../models/user')
const users = require('../controllers/users')

/* Render Register Page */
router.get('/register', users.renderRegister)

/* User Register */
router.post('/register', catchAsync(users.register))

/* Render Login Page */
router.get('/login', users.userLogin)

/* User Login */
router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), users.login)

/* User Logout */
router.get('/logout', users.logout);

module.exports = router;