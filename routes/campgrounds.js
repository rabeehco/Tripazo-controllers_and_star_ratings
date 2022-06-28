const express = require('express')
const router = express.Router()
const campgrounds = require('../controllers/campgrounds')
const catchAsync = require('../utils/CatchAsync')
const {isLoggedIn, isAuthor, validateCampground} = require('../middleware')
const Campground = require('../models/campground')


/* Show Campgrounds */
router.get('/', catchAsync(campgrounds.index))

/* New Campground Form Page */ 
router.get('/new', isLoggedIn, campgrounds.renderNewForm)

/* Create Campground */
router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

/* Show a Campground Page */
router.get('/:id', catchAsync(campgrounds.showCampground))

/* Render Edit Campground Form */
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))

/* Update Campground */
router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))

/* Delete Campground */
router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground))

module.exports = router