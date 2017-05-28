function canBeInstantiated () {
  var singleNoteView = new SingleNoteView()
  var assert = new Assert(singleNoteView, "Single Note View Can Be Instantiated", SingleNoteView)
  try {
    assert.isInstanceOf()
  } catch(e) {
    updateErrorSection(e)
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
    updateErrorSection(e)
  }
}

canBeInstantiated();
returnsHTMLOfItsNote();
