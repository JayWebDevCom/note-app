function giveAllNotesIsAnEmptyArray() {
  var noteList = new NoteList ()
  assert.isTrue(noteList.giveAllNotes().length == 0)
}

function newNoteSetsPropertyOfNote(){
  var noteList = new NoteList ()
  var string  = 'an array is not an array'
  noteList.newNote(string)
  assert.isTrue(noteList.allNotes[0].text === string)
}

giveAllNotesIsAnEmptyArray();
newNoteSetsPropertyOfNote();
