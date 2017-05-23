(function(exports) {

function NoteList () {
  this._notesModels = []
};

NoteList.prototype.giveAllNotes = function () {
    return this._notesModels;
};

NoteList.prototype.newNote = function (string) {
  note = new Note()
  note.setText(string)
  this._notesModels.push(note)
};


exports.NoteList = NoteList;
})(this);
