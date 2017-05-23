(function(exports){

function NoteController (noteList) {

  noteList.newNote('this is the string of the note two');

  var noteView = new NoteView(noteList)

  this.printNotes = function () {

    var stringToReturn = noteView.outputNotes()
    var app = document.getElementById("app")
    app.innerHTML = stringToReturn

  }

}

exports.NoteController = NoteController;
})(this)
