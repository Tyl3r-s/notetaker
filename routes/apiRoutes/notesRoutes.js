const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../data/notes.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (notes) {
        res.json(results);
    } else {
        res.sendStatus(404);
    };
});


router.post('/notes', (req, res) => {
    req.body.id = uid();

    if (!validateNote(req.body)) {
        res.status(400).send("Improperly formatted note.")
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;