const router = require('express').Router();

// AT /api/notes

//GET /api/notes read db.json and return all saved notes as JSON
router.get('/', (req, res) => {

})
//POST /api/notes /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/', (req, res) => {

})
//DELETE /api/notes/:id
router.delete('/:id', (req, res) => {

})