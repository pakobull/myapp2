import React, { useState } from 'react';
import apiService from '../services/apiService';

function NoteForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSaveNote = async () => {
        try {
            const response = await apiService.createNote(title, content);
            console.log(response); // Handle successful note creation
        } catch (error) {
            console.error(error); // Handle note creation error
        }
    };

    return (
        <div>
            <h2>Create Note</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
            <button onClick={handleSaveNote}>Save Note</button>
        </div>
    );
}

export default NoteForm;
