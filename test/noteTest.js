function noteCanBeInstantiated () {
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note, "Note Can be instantiated", Note)
  try {
    assert.isTypeOf()
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteTakesAStringAndAssignsItToTextProperty(){
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note._text, "Note Assigns A String", string)
  try {
    assert.isEqual()
    updateSection(assert)
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteGetTextMethodReturnsNoteTextProperty() {
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note.getText(), "getText returns note text property", string)
    try {
      assert.isEqual()
      updateSection(assert)
    } catch(e) {
      updateErrorSection(e)
    }
}

function noteHasAnId() {
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note._id, "note has an integer id", "number")
    try {
      assert.isTypeOf2()
      updateSection(assert)
    } catch(e) {
      updateErrorSection(e)
    }
}

function noteIdIncreasesBy1() {
  var string = "This is test note"
  var note1 = new Note(string)
  var note2 = new Note(string)
  var assert = new Assert(note2._id - note1._id, "note id increases by 1", 1)
    try {
      assert.isEqual()
      updateSection(assert)
    } catch(e) {
      updateErrorSection(e)
    }
}

function getIdReturnsNoteId () {
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note.getId(), "getId returns id", note._id)
    try {
      assert.isEqual()
      updateSection(assert)
    } catch(e) {
      updateErrorSection(e)
    }
}

noteCanBeInstantiated();
noteTakesAStringAndAssignsItToTextProperty();
noteGetTextMethodReturnsNoteTextProperty();
noteHasAnId();
noteIdIncreasesBy1();
getIdReturnsNoteId();
