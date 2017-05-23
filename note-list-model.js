(function(exports) {

function NoteList () {

  this.allNotes = []
  
  this.giveAllNotes = function () {
    return this.allNotes;
  };

  this.newNote = function(string) {
    note = new Note()
    note.setText(string)
    this.allNotes.push(note)
  }

};

exports.NoteList = NoteList;
})(this);
