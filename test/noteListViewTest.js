function noteListViewOutputNotesPrintsContentsOfASingleNoteInTheList () {
  var string1 = "This is note one"
  var noteList = new NoteList();
  noteList.createNote(string1)
  var noteListView = new NoteListView(noteList);
  var noteid = noteList.getAllNotes()[0].getId()
  var returnString = "<ul><li><div><a href=\"#" + noteid + "\">" + string1 + "</a></div></li></ul>"
  var assert = new Assert(noteListView.returnLinkedHTML(), "notelistView returns HTML of single note in it's noteList", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteListViewOutputNotesPrintsContentsOfManyNotesInTheList () {
  var string1 = "This is note one"
  var string2 = "This is note two"
  var noteList = new NoteList();
  noteList.createNote(string1)
  noteList.createNote(string2)
  var noteListView = new NoteListView(noteList);
  var note1id = noteList.getAllNotes()[0].getId()
  var note2id = noteList.getAllNotes()[1].getId()
  var returnString = "<ul><li><div><a href=\"#" + note1id + "\">" + string1 + "</a></div></li><li><div><a href=\"#" + note2id+ "\">" + string2 + "</a></div></li></ul>"
  var assert = new Assert(noteListView.returnLinkedHTML(), "notelistView returns HTML of many note in it's it's noteList", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteListViewOutputNotesPrintsContentsOfZeroNotesInTheList () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var returnString = "<ul><li><div>Note List Is Empty Of Notes</div></li></ul>"
  var assert = new Assert(noteListView.returnLinkedHTML(), "notelistView returns HTML of empty noteList", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

noteListViewOutputNotesPrintsContentsOfASingleNoteInTheList()
noteListViewOutputNotesPrintsContentsOfManyNotesInTheList();
noteListViewOutputNotesPrintsContentsOfZeroNotesInTheList()
