(function(exports){

function NoteController (noteList) {
  noteList.newNote('this is the string of the note two');
  this._myNoteListView = new NoteListView(noteList)
}

NoteController.prototype.printNotes = function () {
  var stringToReturn = this._myNoteListView.outputNotes()
  var app = document.getElementById("app")
  app.innerHTML = stringToReturn
}

NoteController.prototype.adjustPage = function () {
  var app = document.getElementById("app")
  app.innerHTML = 'new content'

}

exports.NoteController = NoteController;
})(this)

noteList = new NoteList();
noteController = new NoteController(noteList);

noteController.printNotes()
