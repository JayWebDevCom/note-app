(function(exports) {
  function NoteList() {
    this._notesModels = [];
  }

  NoteList.prototype.getAllNotes = function() {
    return this._notesModels;
  };

  NoteList.prototype.createNote = function(string) {
    var note = new Note();
    note.setText(string);
    this._notesModels.push(note);
  };

  NoteList.prototype.getNote = function(noteId) {
    var noteToReturn;
    this.getAllNotes().forEach(function(note) {
      if (note.getId() == noteId) {
        noteToReturn = note;
      }
    });
    return noteToReturn;
  };

  exports.NoteList = NoteList;
})(this);
