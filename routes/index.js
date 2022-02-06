const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// AT localhost:3001/ or deployed app
router.use('/api', apiRoutes);

// GET /notes returning notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// GET * should return the index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;