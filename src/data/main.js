import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";
import App from "./App.js";
const theme__btn = document.getElementById("theme");
const tooglelayout = document.getElementById("layoutcheckbox");
const layouticon = document.getElementById("layouticon");
const root =  document.getElementById("app");
const app = new App(root);
const body = document.getElementById("body");
const layout = document.getElementById("layout");
const layoutbtn =  document.getElementById("layoutbtn").innerHTML;


 








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



