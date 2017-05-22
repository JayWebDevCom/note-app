function giveAllNotesIsAnEmptyArray() {
  var noteList = new NoteList ()
  assert.isTrue(noteList.giveAllNotes().length == 0)
}

giveAllNotesIsAnEmptyArray();
