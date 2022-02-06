const router = require('express').Router();
const noteRoutes = require('./notes');
//AT /api
router.use('/notes', noteRoutes);

module.exports = router;