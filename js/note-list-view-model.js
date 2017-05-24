(function(exports){

function NoteListView (theNoteList) {
  this._theNoteList = theNoteList
}

NoteListView.prototype.outputNotes = function () {
    var returnString = '<ul>\n'

  this._theNoteList.giveAllNotes().forEach(function(note){
    returnString += "<li><div>"
    returnString += note.giveText().slice(0, 20)
    returnString += "</div></li>\n"
  })

    returnString += "</ul>"
    return returnString
}

NoteListView.prototype.printNotesWithLinks = function () {

  var returnString = '<ul>'

this._theNoteList.giveAllNotes().forEach(function(note){

  returnString += "<li>"
  returnString += '<a href="' + '#' + 'notes/'
  returnString += note.giveId() + '">'
  returnString += "<div>"
  returnString += note.giveText().slice(0, 20)
  returnString += "</div></a></li>"

})

  this.updateHTML(returnString)

};

NoteListView.prototype.updateHTML = function (content) {
  document.getElementById('app').innerHTML = content
}


exports.NoteListView = NoteListView;
})(this)
