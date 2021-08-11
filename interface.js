"use strict";

document.addEventListener("DOMContentLoaded", () => {
  
  function createNewDiv(note) {
    const div = document.createElement('div');
    div.className = 'note-div';
    div.innerText = note.title + "...";
    document.getElementById('right-side').appendChild(div);
    div.addEventListener('click', () => {
    div.classList.toggle('expand');
    div.innerText = note.text;
    })
  };
  
  function createNoteFromText() {
    const note = new Note(document.querySelector('#text-input').value);
    createNewDiv(note);
    document.querySelector('#text-input').value = "";
  }


  document.querySelector('#create').addEventListener('click', () => {
    createNoteFromText();
  });
});

