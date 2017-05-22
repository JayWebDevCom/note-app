(function(exports) {
function Note(){
  this.text = ''
  this.giveText = function(){
    return this.text;
  };
};
Note.prototype.setText = function (string) {
  this.text = string
};

exports.Note = Note;
})(this);
