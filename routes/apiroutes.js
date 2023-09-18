const router = require('express').Router();
const {createNewNote, deleteDb} = require("../Develop/lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../Develop/db/db.json");

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  // post request, new note is created
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

  // delete
  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    deleteDb(params, notes);
    res.redirect('');
  });

  module.exports = router;

