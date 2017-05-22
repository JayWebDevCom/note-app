function noteDefualtsToEmpty(){
  var note = new Note()
  assert.isTrue(note.giveText() === '')
}

noteDefualtsToEmpty();
