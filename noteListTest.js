function noteListHasAnEmptyArray() {
  var noteList = new NoteList ()
  assert.isTrue(noteList.giveAllNotes().length == 0)
}

function newNoteSetsPropertyOfNote(){
  var noteList = new NoteList ()
  var string  = 'this is note list testing'
  noteList.newNote(string)
  assert.isTrue(noteList.giveAllNotes()[0].giveText() === string)
}

noteListHasAnEmptyArray();
newNoteSetsPropertyOfNote();
