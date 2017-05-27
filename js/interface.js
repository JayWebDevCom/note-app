var noteList = new NoteList()
noteList.createNote("This is the first note hardcoded")
noteList.createNote("This is the second note hardcoded")

var noteListView = new NoteListView(noteList)

var noteController = new NoteController(noteList);

noteController.getsHTMLAndInsertsHTML()
