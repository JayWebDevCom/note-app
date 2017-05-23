function noteViewOutputNotesPrintsContentsOfNotes () {
  theNoteList = new NoteList()
  var noteListView = new NoteListView(theNoteList)
  theNoteList.newNote('The quick brown fox')
  theNoteList.newNote('Jumps over the lazy dog')
  assert.isTrue(noteListView.outputNotes() == "<ul>\n<li><div>The quick brown fox</div></li>\n<li><div>Jumps over the lazy dog</div></li>\n</ul>")
}

noteViewOutputNotesPrintsContentsOfNotes();
