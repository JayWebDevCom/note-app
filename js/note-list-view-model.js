(function(exports){

function NoteListView (noteList) {
  this._noteList = noteList
}

NoteListView.prototype.returnHTML = function () {
    var returnString = '<ul>'

  if ( this._noteList.getAllNotes().length !== 0 ) {
  this._noteList.getAllNotes().forEach(function(note){
    returnString += "<li><div>"
    returnString += note.getText()
    returnString += "</div></li>"
  })

  } else {
    returnString += "<li><div>Note List Is Empty Of Notes</div></li>"
  }
    returnString += "</ul>"
    return returnString
}

// NoteListView.prototype.printNotesWithLinks = function () {
//
//   var returnString = '<ul>'
//
// this._theNoteList.giveAllNotes().forEach(function(note){
//
//   returnString += "<li>"
//   returnString += '<a href="' + '#' + 'notes/'
//   returnString += note.giveId() + '">'
//   returnString += "<div>"
//   returnString += note.giveText().slice(0, 20)
//   returnString += "</div></a></li>"
//
// })
//
//   this.updateHTML(returnString)
//
// };
//
// NoteListView.prototype.updateHTML = function (content) {
//   document.getElementById('app').innerHTML = content
// }
//

exports.NoteListView = NoteListView;
})(this)
