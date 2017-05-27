function noteCanBeInstantiated () {
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note, "Note Can be instantiated", Note)
  try {
    assert.isTypeOf()
  } catch(e) {
    console.log(e.message)
  }
}

function noteTakesAStringAndAssignsItToTextProperty(){
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note._text, "Note Assigns A String", string)
  try {
    assert.isEqual()
  } catch(e) {
    console.log(e.message)
  }
}

function noteGetTextMethodReturnsNoteTextProperty() {
  var string = "This is test note"
  var note = new Note(string)
  var assert = new Assert(note.getText(), "getText returns note text property", string)
    try {
      assert.isEqual()
    } catch(e) {
      console.log(e.message)
    }

}

noteCanBeInstantiated();
noteTakesAStringAndAssignsItToTextProperty();
noteGetTextMethodReturnsNoteTextProperty()
