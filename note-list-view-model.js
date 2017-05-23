(function(exports){

function NoteListView (theNoteList) {
  this._theNoteList = theNoteList
}

NoteListView.prototype.outputNotes = function () {
    var returnString = '<ul>\n'

  this._theNoteList.giveAllNotes().forEach(function(note){
    returnString += "<li><div>"
    returnString += note.giveText()
    returnString += "</div></li>\n"
  })

    returnString += "</ul>"
    return returnString
}

exports.NoteListView = NoteListView;
})(this)
