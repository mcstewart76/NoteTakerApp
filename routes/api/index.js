const router = require('express').Router();
const noteRoutes = require('./notes');
const path = require('path');
//AT /api
router.use('/notes', noteRoutes);

module.exports = router;