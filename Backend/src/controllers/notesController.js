import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
        
    }
    catch(error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({message : "Failed to fetch notes", error: error.message});
    }
}

export async function getNoteById(req, res) {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({message : "Note not found"});
        }   
        res.status(200).json(note);
    }
    catch(error) {
        console.error("Error fetching note:", error);
        res.status(500).json({message : "Failed to fetch note", error: error.message});
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);

    }
    catch(error) {
        console.error("Error creating note:", error);
        res.status(500).json({message : "Failed to create note", error: error.message});
    }
}

export async function updateNote(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        await Note.findByIdAndUpdate(id, { title, content });
        res.status(200).json({message : "Note updated successfully"});
    }
    catch(error) {
        console.error("Error updating note:", error);
        res.status(500).json({message : "Failed to update note", error: error.message});
    }
    res.status(200).json({message : "Note updated successfully"});
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;
        await Note.findByIdAndDelete(id);
        res.status(200).json({message : "Note deleted successfully"});
    }
    catch(error) {
        console.error("Error deleting note:", error);
        res.status(500).json({message : "Failed to delete note", error: error.message});
    }
}
