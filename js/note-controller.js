(function(exports){

function NoteController (noteListConstructor = NoteList, noteListViewConstructor = NoteListView, singleNoteViewConstructor = SingleNoteView, appElement = document.getElementById("noteToShow")) {
  this._noteList = new noteListConstructor
  this._noteListView = new noteListViewConstructor(this._noteList)
  this._appElement = appElement
}

NoteController.prototype.printNotes = function () {
  var stringToReturn = this._noteListView.outputNotes()
  this._appElement.innerHTML = stringToReturn
}

NoteController.prototype.adjustPage = function (formattedNote) {
  var app = document.getElementById("noteToShow")
  app.innerHTML = formattedNote
}

NoteController.prototype.findNoteAndReturnHTMLEDcontent = function (noteId) {
    var noteToReturn
    this._noteList.giveAllNotes()
    .forEach(function(note){
    if (note.giveId() == noteId){
      noteToReturn = note
    }
  })
    var singleNoteView = new singleNoteView(noteToReturn)
    return singleNoteView.returnHTML()
};

NoteController.prototype.createNote = function (noteText) {

}

exports.NoteController = NoteController;
})(this)
