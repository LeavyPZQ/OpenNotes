import NotesView from "./NotesView.js";
const theme__btn = document.getElementById("theme");
const app =  document.getElementById("app");
const body = document.getElementById("body");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Note has been selected");
    },
});

theme__btn.addEventListener("change", () => {
    if(body.classList.contains("white")) {
        console.log("checked");
        body.className = "dark";
    } else {
        console.log("unchecked");
        body.className = "white";
    }
    console.log("Theme has changed");
});

