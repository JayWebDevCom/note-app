function noteListViewOutputNotesPrintsContentsOfASingleNoteInTheList () {
  var string1 = "This is note one"
  var noteList = new NoteList();
  noteList.createNote(string1)
  var noteListView = new NoteListView(noteList);
  var returnString = "<ul><li><div>" + string1 + "</div></li></ul>"
  var assert = new Assert(noteListView.returnHTML(), "notelistView returns HTML of single note in it's noteList", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    console.log(e.message)
  }
}

function noteListViewOutputNotesPrintsContentsOfManyNotesInTheList () {
  var string1 = "This is note one"
  var string2 = "This is note two"
  var noteList = new NoteList();
  noteList.createNote(string1)
  noteList.createNote(string2)
  var noteListView = new NoteListView(noteList);
  var returnString = "<ul><li><div>" + string1 + "</div></li><li><div>" + string2 + "</div></li></ul>"
  var assert = new Assert(noteListView.returnHTML(), "notelistView returns HTML of many note in it's it's noteList", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    console.log(e.message)
  }
}

function noteListViewOutputNotesPrintsContentsOfZeroNotesInTheList () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var returnString = "<ul><li><div>" + "Note List Is Empty Of Notes" + "</div></li></ul>"
  var assert = new Assert(noteListView.returnHTML(), "notelistView returns HTML of empty noteList", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    console.log(e.message)
  }
}

noteListViewOutputNotesPrintsContentsOfASingleNoteInTheList()
noteListViewOutputNotesPrintsContentsOfManyNotesInTheList();
noteListViewOutputNotesPrintsContentsOfZeroNotesInTheList()
