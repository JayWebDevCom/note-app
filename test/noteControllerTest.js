function noteControllerCanBeInstantiated() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList);
  var assert = new Assert(noteController, "noteController can be instantiated", NoteController)
  try {
    assert.isTypeOf()
  } catch(e) {
    console.log(e.message)
  }
}

function noteControllerUpdatesThePage() {
  var noteList = new NoteList()
  var fakePageElement = {}
  var noteController = new NoteController(noteList, NoteListView, fakePageElement);
  var returnString = "<ul><li><div>Fave drink seltzer</div></li></ul>"
  noteController.getsHTMLAndInsertsHTML()
  var assert = new Assert(fakePageElement.innerHTML, "noteController updates the page", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    console.log(e)
  }

}


noteControllerCanBeInstantiated()
noteControllerUpdatesThePage()
