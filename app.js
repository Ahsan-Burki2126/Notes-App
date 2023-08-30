let createBtn = document.querySelector("#createBtn");
let notesContainer = document.querySelector(".notes-container");

// Load saved notes from local storage
window.addEventListener("DOMContentLoaded", () => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
    
    // Attach event listeners to existing delete buttons
    const deleteButtons = document.querySelectorAll(".delbtn");
    deleteButtons.forEach((delBtn) => {
        delBtn.addEventListener("click", () => {
            delBtn.parentElement.remove();
            updateData();
        });
    });
});

function updateData() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let para = document.createElement("p");
    para.setAttribute("contenteditable", true);
    para.classList.add("para");
    notesContainer.appendChild(para);
    let delBtn = document.createElement("img");
    delBtn.src = "images/delete.png";
    delBtn.classList.add("delbtn");
    para.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
        para.remove();
        updateData();
    });

    updateData(); // Save to local storage when new note is created
});
