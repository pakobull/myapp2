const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/notes', authMiddleware.authenticate, noteController.createNote);
router.get('/notes', authMiddleware.authenticate, noteController.getNotes);

module.exports = router;
