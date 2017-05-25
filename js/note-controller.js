(function(exports){

function NoteController (noteList) {
  // noteList.newNote('this is the string of the note two');
  this._noteListView = new NoteListView(noteList)
}

NoteController.prototype.printNotes = function () {
  var stringToReturn = this._noteListView.outputNotes()
  var app = document.getElementById("app")
  app.innerHTML = stringToReturn
}

NoteController.prototype.adjustPage = function (string) {
  var app = document.getElementById("noteToShow")
  app.innerHTML = string
}

NoteController.prototype.findNoteAndReturnHTML = function (number) {
    var toReturn
    noteList.giveAllNotes()
    .forEach(function(note){
    if (note.giveId() == number){
      toReturn = note.giveText()
    }
  })
    return toReturn
};

exports.NoteController = NoteController;
})(this)
