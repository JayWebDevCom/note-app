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
  var fakeNoteList = {}
  var fakeNotesElement = {}
  var fakestring = "returned string"
  function FakeNotelistViewConstructor(){}
  FakeNotelistViewConstructor.prototype.returnLinkedHTML = function () {
    return fakestring
  };
  var noteController = new NoteController(fakeNoteList, FakeNotelistViewConstructor, fakeNotesElement);
  noteController.getsHTMLAndInsertsHTML()
  var assert = new Assert(fakeNotesElement.innerHTML,
    "noteController updates the page with HTML content", fakestring)
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

function noteControllerAdjustsPageContentWithGivenContent(){
  var fakeNoteList = {}
  var anotherFakeString = "This is another fake string"

  var fakeNote = {}
  fakeNote.getText = function() {
    return anotherFakeString
  }

  fakeNoteList.getNote = function (){
    return fakeNote
  }

  var fakeNotesElement = {}
  var fakeNoteElement = {}

  function fakeSingleNoteViewConstructor (fakeNote) {}
  fakeSingleNoteViewConstructor.prototype.returnHTML = function (){
    return "<div>" + fakeNote.getText() + "</div>"
  }

  var noteController = new NoteController(fakeNoteList, NoteListView, fakeNotesElement, fakeNoteElement, fakeSingleNoteViewConstructor);
  noteController.findNoteAndUpdatePageWithHTMLEDcontent(999)
  var returnString = "<div>" + fakeNote.getText() + "</div>"

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
