"use strict";

document.addEventListener("DOMContentLoaded", () => {




// new note variable
let note = new Note();
let notesArray = [];

// Creates a new div and enters it into the body
createNewDiv() {
  let div = document.createElement('div');
  div.className = 'note-div';
  document.getElementsByTagName('body')[0].appendChild(div);
  div.innerHTML = note.title;
};

// gets text input and adds to note
populateNoteText() {
 note.text = document.querySelector('#text-input').value;
};

// When button is clicked
document.querySelector('#create').addEventListener('click', () => {
  populateNoteText();
  createNewDiv();
})


















})