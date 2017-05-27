(function(exports){

function NoteController (noteList, NoteListViewConstructor = NoteListView, pageElement = document.getElementById("app")) {
  noteList.createNote("Fave drink seltzer")
  this._pageElement = pageElement
  this._noteListView = new NoteListViewConstructor(noteList)

}

NoteController.prototype.getsHTMLAndInsertsHTML = function () {
  var content = this._noteListView.returnHTML()
  this._pageElement.innerHTML = content

}

//
// NoteController.prototype.printNotes = function () {
//   var stringToReturn = this._noteListView.outputNotes()
//   this._appElement.innerHTML = stringToReturn
// }
//
// NoteController.prototype.adjustPage = function (formattedNote) {
//   var app = document.getElementById("noteToShow")
//   app.innerHTML = formattedNote
// }
//
// NoteController.prototype.findNoteAndReturnHTMLEDcontent = function (noteId) {
//     var noteToReturn
//     this._noteList.giveAllNotes()
//     .forEach(function(note){
//     if (note.giveId() == noteId){
//       noteToReturn = note
//     }
//   })
//     var singleNoteView = new singleNoteView(noteToReturn)
//     return singleNoteView.returnHTML()
// };
//
// NoteController.prototype.createNote = function (noteText) {
//
// }

exports.NoteController = NoteController;
})(this)
