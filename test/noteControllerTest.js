function noteControllerCanBeInstantiated() {
  // var noteList = new NoteList();
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController)
}

function noteControllerPrintsNotes () {

  var fakeNoteListView = function() {};
  fakeNoteListView.prototype.outputNotes = function() {
    return "Some Text"
  };

  var fakeAppElement = {}
  var noteList = new NoteList();
  var noteController = new NoteController(NoteList, SingleNoteView,fakeNoteListView, fakeAppElement);
  noteController.printNotes();
  assert.isTrue("Some Text" == fakeAppElement.innerHTML);

}

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
noteControllerPrintsNotes();
