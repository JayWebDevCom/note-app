returnsStringOfHTML = function () {
  var string = 'this is my string'
  var note = new Note(string)
  var singleNoteView = new SingleNoteView(note)

}


returnsTwentyCharactersStringOfHTML = function () {
  var string = 'this is my very very very unusually long string'
  var note = new Note(string)
  var singleNoteView = new SingleNoteView(note)

}

returnsStringOfHTML()
returnsTwentyCharactersStringOfHTML()
