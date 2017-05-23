(function(exports){
  function NoteView (noteList) {

  this.notelist = noteList.giveAllNotes()

  this.outputNotes = function () {
      var returnString = '<ul>\n'

    this.notelist.forEach(function(note){
      returnString += "<li><div>"
      returnString += note.giveText()
      returnString += "</div></li>\n"
    })

      returnString += "</ul>"
      return returnString
  }
  }

exports.NoteView = NoteView;
})(this)
