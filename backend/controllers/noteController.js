const Note = require('../models/Note');

exports.createNote = async (req, res) => {
    try {
        const { userId } = req;
        const { title, content } = req.body;
        const note = new Note({ userId, title, content });
        await note.save();
        res.status(201).json({ message: 'Note created successfully', note });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNotes = async (req, res) => {
    try {
        const { userId } = req;
        const notes = await Note.find({ userId });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
