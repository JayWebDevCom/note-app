function noteViewOutputNotesPrintsContentsOfNotes () {
  var noteList = new NoteList()
  noteList.newNote('The quick brown fox')
  noteList.newNote('Jumps over the lazy dog')
  var noteView = new NoteView(noteList)
  assert.isTrue(noteView.outputNotes() == "<ul>\n<li><div>The quick brown fox</div></li>\n<li><div>Jumps over the lazy dog</div></li>\n</ul>")
}

noteViewOutputNotesPrintsContentsOfNotes();
