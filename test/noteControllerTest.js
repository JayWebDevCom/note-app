function noteControllerCanBeInstantiated() {
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController)
}

function noteControllerPrintsNotes () {
  var noteController = new NoteController(noteList);

  noteController.printNotes = function() {
    string = "this is the string of the note two"
    shortenedString = string.slice(0,20)
    return "<ul>\n<li><div>" + shortenedString + "</div></li>\n</ul>"
  }

  var appHTML = document.getElementById('app').innerHTML
  assert.isTrue(appHTML == noteController.printNotes())
}

noteControllerCanBeInstantiated()
noteControllerPrintsNotes();
