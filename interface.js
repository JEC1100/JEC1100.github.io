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
    const text = document.querySelector('#text-input').value
    fetch("https://makers-emojify.herokuapp.com/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({text: text})
    }).then((response) => {
      return response.json()
    }).then((json) => {
      const note = new Note(json.emojified_text);
      createNewDiv(note);
      document.querySelector('#text-input').value = "";
    })
  }


  document.querySelector('#create').addEventListener('click', () => {
    createNoteFromText();
  });
});

