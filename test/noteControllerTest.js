function noteControllerCanBeInstantiated() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList);
  var assert = new Assert(noteController, "noteController can be instantiated", NoteController)
  try {
    assert.isTypeOf()
  } catch(e) {
    console.log(e)
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

// function noteControllerPrintsNotes () {
//
//   var fakeNoteListView = function() {};
//   fakeNoteListView.prototype.outputNotes = function() {
//     return "Some Text"
//   };
//
//   var fakeAppElement = {}
//   var noteList = new NoteList();
//   var noteController = new NoteController(NoteList, SingleNoteView,fakeNoteListView, fakeAppElement);
//   noteController.printNotes();
//   assert.isTrue("Some Text" == fakeAppElement.innerHTML);
//
// }

// noteController.printNotes = function() {
//   string = "this is the string of the note two"
//   shortenedString = string.slice(0,20)
//   return "<ul>\n<li><div>" + shortenedString + "</div></li>\n</ul>"
// }

// questionnable mocking...
// console.log(noteController.printNotes())
// var appHTML = document.getElementById('app').innerHTML
// var appHTML = noteController.printNotes()
// assert.isTrue(appHTML == noteController.printNotes())

noteControllerCanBeInstantiated()
noteControllerUpdatesThePage()
