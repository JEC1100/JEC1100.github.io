"use strict";

document.addEventListener("DOMContentLoaded", () => {

// new note variable
// let notesArray = [];

// Creates a new div and enters it into the body
createNewDiv(note) {
  let div = document.createElement('div');
  div.className = 'note-div';
  document.getElementById('right-side')[0].appendChild(div);
  div.innerHTML = note.title;
};

// gets text input and adds to note
populateNoteText() {
  let input = document.querySelector('#text-input').value;
  let note = new Note(input);
  createNewDiv(note);
  // notesArray.push(note);
};

// When button is clicked
document.querySelector('#create').addEventListener('click', () => {
  populateNoteText();
});
});