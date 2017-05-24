returnsStringOfHTML = function () {
  string = 'this is my string'
  note = new Note(string)
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.returnHTML() == '<div>' + string + '</div>')
}


returnsTwentyCharactersStringOfHTML = function () {
  string = 'this is my very very very long string'
  note = new Note(string)
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.returnHTML() == '<div>' + string + '</div>')
}




returnsStringOfHTML()
