"use strict";

document.addEventListener("DOMContentLoaded", () => {
  
  function createNewDiv(note) {
    const div = document.createElement('div');
    div.className = 'note-div';
    div.innerHTML = note.title + "...";
    // Took out [0]
    document.getElementById('right-side').appendChild(div);
  };
  
  function createNoteFromText() {
    const note = new Note(document.querySelector('#text-input').value);
    createNewDiv(note);
    document.querySelector('#text-input').value = "";
  }
  
  document.querySelector('#create').addEventListener('click', () => {
    createNoteFromText();
  })
})

