(function () {
    angular.module('myApp.note')
        .config(['$stateProvider', function config($stateProvider) {
            var notes = {
              name: 'notes',
              url: '/notes',
              views: {
                  "main": {
                      controller: 'NotesCtrl as notesCtrl',
                      templateUrl: 'note/notes.tpl.html'
                  }
              },
              data: {pageTitle: 'Noteless'}
            }

            var newNote = {
              name: 'new-note',
              url: '/new-note',
              views: {
                  "main": {
                      controller: 'NotesCtrl as notesCtrl',
                      templateUrl: 'note/new-note.tpl.html'
                  }
              },
              data: {pageTitle: 'Noteless'}
            }

            var editNote = {
              name: 'edit-note',
              url: '/note/:id',
              views: {
                  "main": {
                      controller: 'NotesCtrl as notesCtrl',
                      templateUrl: 'note/new-note.tpl.html'
                  }
              },
              data: {pageTitle: 'Noteless'}
            }

            $stateProvider.state(notes);
            $stateProvider.state(newNote);
            $stateProvider.state(editNote);
        }])
})();
