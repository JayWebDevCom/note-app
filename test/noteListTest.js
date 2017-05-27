function noteListHasAnArray() {
  var noteList = new NoteList()
  var assert = new Assert(noteList._notesModels, "NoteList Has An Empty Array", Array)
  try {
    assert.isTypeOf()
  } catch (e) {
    console.log(e.message)
  }
}

function getArrayReturnsItsArray() {
  var noteList = new NoteList()
  var assert = new Assert(noteList.getAllNotes(), "getArray Returns Array", noteList._notesModels)
  try {
    assert.isEqual()
  } catch (e) {
    console.log(e.message)
  }
}

function createNoteCreatesAndStoresANote() {
  var noteList = new NoteList()
  var string = "Create note creates a note"
  noteList.createNote(string)
  var assert = new Assert(noteList.getAllNotes()[0], "notelist creates and stores a note", Note)
  try {
    assert.isTypeOf()
  } catch (e) {
    console.log(e.message)
  }
}

function NoteCreatedHasTheStringGiven () {
  var noteList = new NoteList()
  var string = "Create note creates a note"
  noteList.createNote(string)
  var assert = new Assert(noteList.getAllNotes()[0].getText(), "notelist creates and stores a note with a given string", string)
  try {
    assert.isEqual()
  } catch (e) {
    console.log(e.message)
  }
}

noteListHasAnArray();
getArrayReturnsItsArray();
createNoteCreatesAndStoresANote();
NoteCreatedHasTheStringGiven ();
