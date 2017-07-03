### Note App

![Note App](https://www.wpclipart.com/education/supplies/notebook/notepad_pencil.png)


#### Description
* The application implements Model-View-Controller Technology, Solid Principles, and separation of concerns.
* It is fully test driven using a testing framework written by me.
* This objects involved in this application include - Note-controller, Note-list-model, Note-list-view-model, Note-list-model and a Single-note-view-model.

#### Congifuration
* `$ npm install`
* `$ node node_modules/http-server/bin/http-server`
* Navigate to port 8080 of the localhost server.
* Start taking notes!

#### Usage
* The note app has two hardcoded notes included - see `js/interface.js`
* Enter new note text in the textarea and click `save note`.
* Saved notes are displayed as html links on the page in chronological order. The link text is the first 20 characters of the note.
* Clicking one of these links will display the note's full content above.

#### Operation
* Note Capturing - A script on the homepage listens for a form submit event. The event is intercepted and the `noteList.createNote()` is called, passing the first childnode value of the form as the note content.
* Note Displaying - All notes have sequentially increasing IDs and each link has this id for it's href. The interface listens for a `hashchange` event triggered by clicking on a new note link.

#### Tests
* Click the link 'Test Page' on the landing page to see the test suite.
* Code for the testing framework is in `/js/assert.js`
