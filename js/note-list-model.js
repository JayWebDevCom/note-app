(function(exports) {

function NoteList () {
  this._notesModels = []
}

NoteList.prototype.getAllNotes = function () {
    return this._notesModels;
}

NoteList.prototype.createNote = function (string) {
  var note = new Note()
  note.setText(string)
  this._notesModels.push(note)
}

exports.NoteList = NoteList;

})(this);
