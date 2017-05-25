// var httpServer = require("http-server");
// var path = require("path");
// var pathToHtmlAndJsFiles = path.join(__dirname, "");
// console.log('path is', pathToHtmlAndJsFiles)
// var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
// server.listen(3000);
// var Note = require('../js/note-model')
// var assert = require('../js/assert')
//
// var note = new Note.Note('af')
//
// console.log(note)

function noteDefualtsToEmpty(){
  string = 'This is the first note text...'
  var note = new Note(string)
  assert.isTrue(note.giveText() === string)
}

function noteTextCanBeSet(){
  var note = new Note(string)
  string = 'This is the second note text...'
  note.setText(string)
  assert.isTrue(note.giveText() == string)
}

noteDefualtsToEmpty();
noteTextCanBeSet();
