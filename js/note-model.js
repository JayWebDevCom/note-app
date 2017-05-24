(function(exports) {
function Note (string) {
  this.text = string
}

Note.prototype.giveText = function(){
  return this.text;
};

Note.prototype.setText = function (string) {
  this.text = string
};

exports.Note = Note;

})(this);
