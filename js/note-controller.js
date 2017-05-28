(function(exports){

function NoteController (noteList, NoteListViewConstructor = NoteListView,
  notesElement = document.getElementById("app"),
  noteElement = document.getElementById("showNotes"),
  SingleNoteViewConstructor = SingleNoteView) {
  this._noteList = noteList
  this._noteElement = noteElement
  this._notesElement = notesElement
  this._noteListView = new NoteListViewConstructor(noteList)
  this._singleNoteViewConstructor = SingleNoteViewConstructor
}

NoteController.prototype.getsHTMLAndInsertsHTML = function () {
  this._notesElement.innerHTML = this._noteListView.returnLinkedHTML()
}

NoteController.prototype.findNoteAndUpdatePageWithHTMLEDcontent = function (noteId) {
    var noteToReturn = this._noteList.getNote(noteId)
    this._noteElement.innerHTML = new this._singleNoteViewConstructor(noteToReturn).returnHTML()
};

exports.NoteController = NoteController;

})(this)
