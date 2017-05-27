function canBeInstantiated () {
  var singleNoteView = new SingleNoteView()
  var assert = new Assert(singleNoteView, "Single Note View Can Be Instantiated", SingleNoteView)
  try {
    assert.isTypeOf()
  } catch(e) {
    console.log(e.message)
  }
}

function returnsHTMLOfItsNote () {
  var string = "Testing Single Note View Can Be Instantiated"
  var note = new Note(string)
  var singleNoteView = new SingleNoteView(note)
  var toReturn = "<div>" + string + "</div>"
  var assert = new Assert(singleNoteView.returnHTML(), "Single Note View returns HTML of it's note", toReturn)
  try {
    assert.isEqual()
  } catch(e) {
    console.log(e.message)
  }
}


canBeInstantiated();
returnsHTMLOfItsNote();
