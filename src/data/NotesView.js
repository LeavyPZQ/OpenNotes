export default class NotesView {
    constructor(root, layoutbtn, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
            this.root = root;
            this.onNoteSelect = onNoteSelect;
            this.onNoteAdd = onNoteAdd;
            this.onNoteEdit = onNoteEdit;
            this.onNoteDelete = onNoteDelete;
            this.layoutbtn = layoutbtn;
            this.root.innerHTML = `
                <div class="notes__sidebar">
                    <button class="cssbuttons-io notes__add">
                    <span>
                        <i class="material-icons">add</i>
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path>
                        </svg> Add note
                    </span>
                    </button>
                    <div class="notes__list"></div>
                </div>
                
                <div class="notes__preview">
                    <input class="notes__title" type="text" placeholder="New Note...">
                    <textarea class="notes__body">Take Note...</textarea>
                </div>
            `;

            const btnAddNote = this.root.querySelector(".notes__add");
            const switchbtn = this.theme__btn;
            const inpTitle = this.root.querySelector(".notes__title");
            const inpBody = this.root.querySelector(".notes__body");

            btnAddNote.addEventListener("change", () => {
                this.onNoteAdd();
            });

            [inpTitle, inpBody].forEach(inputField => {
                inputField.addEventListener("blur", () => {
                    const updatedTitle = inpTitle.value.trim();
                    const updatedBody = inpBody.value.trim();

                    this.onNoteEdit(updatedTitle, updatedBody);
                });
            });

            console.log(this._createListItemHTML(300, "hello", "owen lutcht", new Date()));
            
            //
        }
    

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
        
        <div class="notes__list-item" data-note-id="${id}">
        <div class="notes__small-title">${title}</div>
        <div class="notes__small-body">
            ${body.substring(0, MAX_BODY_LENGTH)}
            ${body.length > MAX_BODY_LENGTH ? "..." : ""}
        </div>
        <div class="notes__small-updated">
            ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
        </div>
    </div>
        `;
    }

    updateNoteList(notes) {
        const noteListContainer = this.root.querySelector(".notes__list");


        noteListContainer.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            noteListContainer.insertAdjacentHTML("beforeend", html);
        }


        noteListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Are you sure you want to delete this note?");

                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });
        });
    }
}