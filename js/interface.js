var noteList = new NoteList()
noteList.createNote("This is the first note hardcoded")

var noteListView = new NoteListView(noteList)

var noteController = new NoteController(noteList);

noteController.getsHTMLAndInsertsHTML()
