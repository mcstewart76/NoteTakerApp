const router = require('express').Router();
const apiRoutes = require('./api');

// AT localhost:3001/ or deployed app
router.use('/api', apiRoutes);

// GET * should return the index.html
router.get('*', (req, res) => {

})
// GET /notes returning notes.html file
router.get('/notes', (req, res) => {
    
})
module.exports = router;