(function(exports){

function NoteController (noteList, NoteListViewConstructor = NoteListView,
  notesElement = document.getElementById("app"), noteElement = document.getElementById("showNotes")) {
  this._noteList = noteList
  this._noteElement = noteElement
  this._notesElement = notesElement
  this._noteListView = new NoteListViewConstructor(noteList)
}

NoteController.prototype.getsHTMLAndInsertsHTML = function () {
  this._notesElement.innerHTML = this._noteListView.returnLinkedHTML()
}

NoteController.prototype.findNoteAndUpdatePageWithHTMLEDcontent = function (noteId) {
    var noteToReturn
    this._noteList.getAllNotes()
    .forEach(function(note){
    if (note.getId() == noteId){
      noteToReturn = note
    }
  })
    this._noteElement.innerHTML = new SingleNoteView(noteToReturn).returnHTML()
};

exports.NoteController = NoteController;

})(this)
