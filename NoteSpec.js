"use strict";

function testText() {
  let actual = "This is a test note more than 20 characters";
  let note = new Note(actual);
  
  let expected = note.text

  if (actual == expected) {
    console.log("pass");
  } else 
  console.log("testText failed");
}
testText();

function testTitle() {
  let note = new Note("This is a test note more than 20 characters");
  console.log(note);
  let noteTitle = note.title;

  if (noteTitle.length > 20) {
    throw new Error("Title is more than 20 characters");
  } else 
  console.log("pass");

};

testTitle();