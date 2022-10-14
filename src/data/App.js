import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";


export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root,this._handlers());

        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.lenght > 0) {
            this._setActiveNote(note[0])
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.lenght > 0);
    }

    _setActiveNote(note) {
        this.activeNote =  note;
        this.view.updateActiveNote(note);                                     
    }

    _handlers() {
        return {
            onNoteSelected: noteId => {
                console.log("Note Selected: " + noteId);
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "New Note",
                    body: "New Body..."
                };

                NotesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title, body) => {
                console.log(title, body);
                
            },
            onNoteDelete: noteId => {
                console.log("Note Deleted: " + noteId);
            },
        };
    }
}