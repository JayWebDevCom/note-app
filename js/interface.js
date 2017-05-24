var noteList = new NoteList();

var noteController = new NoteController(noteList);

noteList.newNote('aaa')
noteList.newNote('bbbbb')
noteList.newNote('cccccc')

// noteController.printNotes()

noteListView = new NoteListView(noteList)

noteListView.printNotesWithLinks()
