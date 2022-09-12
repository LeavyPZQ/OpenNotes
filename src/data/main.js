import NotesView from "./NotesView.js"

const app =  document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Note has been selected");
    }
})