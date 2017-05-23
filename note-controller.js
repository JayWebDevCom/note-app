

(function(exports){

function NoteController (noteList = new NoteList()) {

  noteList = new NoteList()

  noteList.newNote('this is the string of the note')
    
  var noteView = new NoteView(noteList)

  this.printNotes = function () {

    var stringToReturn = noteView.outputNotes()
    var app = document.getElementById("app")
    app.innerHTML = stringToReturn

  }

}



exports.NoteController = NoteController;
})(this)


var noteController = new NoteController();
noteController.printNotes()
