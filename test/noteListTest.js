function noteListCanBeInstantiated() {
  var noteList = new NoteList()
  var assert = new Assert(noteList, "NoteList Has Can Be Instantiated", NoteList)
  try {
    assert.isInstanceOf()
    updateSection(assert)
  } catch (e) {
    updateErrorSection(e)
  }
}

function noteListHasAnArray() {
  var noteList = new NoteList()
  var assert = new Assert(noteList._notesModels, "NoteList Has An Empty Array", Array)
  try {
    assert.isInstanceOf()
    updateSection(assert)
  } catch (e) {
    updateErrorSection(e)
  }
}

function getArrayReturnsItsArray() {
  var noteList = new NoteList()
  var assert = new Assert(noteList.getAllNotes(), "getArray Returns Array", noteList._notesModels)
  try {
    assert.isEqual()
    updateSection(assert)
  } catch (e) {
    updateErrorSection(e)
  }
}

function createNoteCreatesAndStoresANote() {
  var noteList = new NoteList()
  var string = "Create note creates a note"
  noteList.createNote(string)
  var assert = new Assert(noteList.getAllNotes()[0], "notelist creates and stores a note", Note)
  try {
    assert.isInstanceOf()
    updateSection(assert)
  } catch (e) {
    updateErrorSection(e)
  }
}

function NoteCreatedHasTheStringGiven () {
  var noteList = new NoteList()
  var string = "Create note creates a note"
  noteList.createNote(string)
  var assert = new Assert(noteList.getAllNotes()[0].getText(), "notelist creates and stores a note with a given string", string)
  try {
    assert.isEqual()
    updateSection(assert)
  } catch (e) {
    updateErrorSection(e)
  }
}

noteListCanBeInstantiated()
noteListHasAnArray();
getArrayReturnsItsArray();
createNoteCreatesAndStoresANote();
NoteCreatedHasTheStringGiven ();
