import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await apiService.getNotes();
                setNotes(response.data);
            } catch (error) {
                console.error(error); // Handle error
            }
        };
        fetchNotes();
    }, []);

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note._id}>
                        <strong>{note.title}</strong>: {note.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoteList;
