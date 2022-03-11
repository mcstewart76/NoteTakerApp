const notes = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../../helpers/fsUtils');

// AT /api/notes

//GET /api/notes read db.json and return all saved notes as JSON
notes.get('/', (req, res) => {
    
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
      
})
//POST  /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
notes.post('/', (req, res) => {
    console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
})
//DELETE /api/notes/:id
notes.delete('/:id', (req, res) => {

})

module.exports = notes;