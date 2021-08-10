"use strict";

class Note {
  constructor(text) {
    this.text = text;
    this.title = this.text.substring(0,20);
  }
 } 
