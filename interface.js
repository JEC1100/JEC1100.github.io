"use strict";


document.addEventListener("DOMContentLoaded", () => {

  
  let notesArray = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : [];

  localStorage.setItem('notes', JSON.stringify(notesArray))
  const data = JSON.parse(localStorage.getItem('notes'));

  data.forEach((item) => {
    createNewDiv(item)
  })

  function createNewDiv(note) {
    const div = document.createElement('div');
    div.className = 'note-div';
    div.innerText = note.title + "...";
    document.getElementById('right-side').appendChild(div);
    listenForClick(div, note)
  };

  function listenForClick(div, note) {
    div.addEventListener('click', () => {
      div.classList.toggle('hide');
      if (div.innerText == note.text){
       setTimeout(function() {
        div.innerText = note.title + '...';
        div.classList.toggle('hide');
       }, 1000);
      } else {
        setTimeout(function() {
          div.innerText = note.text;
          div.classList.toggle('hide');
         }, 1000);
      }
    })
  }
  
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
      notesArray.push(note);
      localStorage.setItem('notes', JSON.stringify(notesArray));
      createNewDiv(note);
      document.querySelector('#text-input').value = "";
    });
  };










  document.querySelector('#create').addEventListener('click', () => {
    createNoteFromText();
  });
  document.querySelector('#clear').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  })
});

