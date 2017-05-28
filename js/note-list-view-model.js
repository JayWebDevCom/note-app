(function(exports){

function NoteListView (noteList) {
  this._noteList = noteList
}

NoteListView.prototype.returnLinkedHTML = function () {
    var returnString = '<ul>'

  if ( this._noteList.getAllNotes().length !== 0 ) {
  this._noteList.getAllNotes().forEach(function(note){

    returnString += "<li><div>"
    returnString += '<a href="#' + note.getId() + '">'
    returnString += note.getText().slice(0,20)
    returnString += "</a>"
    returnString += "</div></li>"

  })

  } else {
    returnString += "<li><div>Note List Is Empty Of Notes</div></li>"
  }
    returnString += "</ul>"
    return returnString
}

exports.NoteListView = NoteListView;
})(this)
