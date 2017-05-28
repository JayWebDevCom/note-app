function noteControllerCanBeInstantiated() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList);
  var assert = new Assert(noteController, "noteController can be instantiated", NoteController)
  try {
    assert.isInstanceOf()
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteControllerUpdatesThePageThroughgetsHTMLAndInsertsHTML() {
  var noteList = new NoteList()
  var fakeNotesElement = {}
  string = "Testing inserts HTML"
  noteList.createNote(string)
  var noteController = new NoteController(noteList, NoteListView, fakeNotesElement);
  var noteid = noteList.getAllNotes()[0].getId()
  var string = noteList.getAllNotes()[0].getText()
  var returnString = "<ul><li><div><a href=\"#" + noteid + "\">" + string + "</a></div></li></ul>"
  noteController.getsHTMLAndInsertsHTML()
  var assert = new Assert(fakeNotesElement.innerHTML, "noteController updates the page with HTML content", returnString)
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteControllerAdjustsPageContentWithGivenContent(){
  var noteList = new NoteList()
  var fakeNotesElement = {}
  var fakeNoteElement = {}
  var noteController = new NoteController(noteList, NoteListView, fakeNotesElement, fakeNoteElement);
  var string = "this is the adjustment"
  noteList.createNote(string)
  var note = noteList.getAllNotes()[0]
  note._id = 999
  noteController.findNoteAndUpdatePageWithHTMLEDcontent(999)
  var returnString = "<div>" + string + "</div>"
  var assert = new Assert(returnString, "noteController updates the page with HTML content after reveiving an id", fakeNoteElement.innerHTML)
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

noteControllerCanBeInstantiated()
noteControllerUpdatesThePageThroughgetsHTMLAndInsertsHTML();
noteControllerAdjustsPageContentWithGivenContent();
