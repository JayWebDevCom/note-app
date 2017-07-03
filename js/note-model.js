(function(exports) {
  function Note(string) {
    Note._numInstances = (Note._numInstances || 0) + 1;
    this._id = Note._numInstances;
    this._text = string;
  }

  Note.prototype.getText = function() {
    return this._text;
  };

  Note.prototype.setText = function(string) {
    this._text = string;
  };

  Note.prototype.getId = function() {
    return this._id;
  };

  exports.Note = Note;
})(this);
