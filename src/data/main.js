import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";
const theme__btn = document.getElementById("theme");
const tooglelayout = document.getElementById("layoutcheckbox");
const layouticon = document.getElementById("layouticon");
const app =  document.getElementById("app");
const body = document.getElementById("body");
const layout = document.getElementById("layout");
const layoutbtn =  document.getElementById("layoutbtn").innerHTML;

const view = new NotesView(app, layoutbtn,{
    onNoteAdd() {
        console.log("Note has been selected");
    },

    onNoteEdit(newTitle, newBody) {
        console.log(newTitle)
        console.log(newBody)
    },
    onNoteSelect(id) {
        console.log("Note Selected:" + id);
    },
    onNoteDelete(id) {
        console.log("Note Deleted:" + id);
    },
});

view.updateNoteList(NotesAPI.getAllNotes());









theme__btn.addEventListener("change", () => {
    if(body.classList.contains("white")) {
        body.className = "dark";
    } else {
        body.className = "white";
    }
});

tooglelayout.addEventListener("change", () => {
    if(layout.classList.contains("extended")) {
        layout.className = "compact";
        layouticon.className = "right"; 
    } else {
        layout.className = "extended";
        layouticon.className = "left";
    }
});



