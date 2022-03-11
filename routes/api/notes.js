const notes = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../../helpers/fsUtils');

// AT /api/notes

//GET /api/notes read db.json and returns all saved notes as JSON
notes.get('/', (req, res) => {
    
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
      
})
//POST  /api/notes 
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
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== noteId);
      writeToFile('./db/db.json', result);
      // Response to the DELETE request
      res.json(`Item ${noteId} has been deleted.`);
    });
})

module.exports = notes;