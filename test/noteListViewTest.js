function noteListViewOutputNotesPrintsContentsOfNotes () {
  theNoteList = new NoteList()
  var noteListView = new NoteListView(theNoteList)
  string1 = 'The quick brown fox'
  string2 = 'Jumps over the lazy dog'
  theNoteList.newNote(string1)
  theNoteList.newNote(string2)
  assert.isTrue(noteListView.outputNotes() == "<ul>\n<li><div>" + string1.slice(0, 20) + "</div></li>\n<li><div>" + string2.slice(0, 20) + "</div></li>\n</ul>")
}

noteListViewProcessesNotesWithLinks = function () {
  theNoteList = new NoteList()
  var noteListView = new NoteListView(theNoteList)
  string1 = 'The quick brown fox'
  string2 = 'Jumps over the lazy dog'
  theNoteList.newNote(string1)
  theNoteList.newNote(string2)
  // console.log(noteListView.printNotesWithLinks())

  noteListView.printNotesWithLinks = function () {
    return 'abc'
  }


  assert.isTrue( noteListView.printNotesWithLinks() == 'abc' )
}


noteListViewOutputNotesPrintsContentsOfNotes();
noteListViewProcessesNotesWithLinks();
