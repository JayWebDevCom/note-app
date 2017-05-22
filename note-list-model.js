(function(exports) {
function NoteList () {
  this.allNotes = []
  this.giveAllNotes = function () {
    return this.allNotes;
  };
};

exports.NoteList = NoteList;
})(this);
