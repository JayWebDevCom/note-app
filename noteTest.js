function noteDefualtsToEmpty(){
  var note = new Note()
  assert.isTrue(note.giveText() === '')
}

function noteTextCanBeSet(){
  var note = new Note()
  string = 'This is the note text...'
  note.setText(string)
  assert.isTrue(note.giveText() == string)
}

noteDefualtsToEmpty();
noteTextCanBeSet();
