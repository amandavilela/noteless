(function () {
    angular.module('myApp.note')
        .config(['$stateProvider', function config($stateProvider) {
            var notes = {
              name: 'notes',
              url: '/notes',
              views: {
                  "main": {
                      controller: 'NoteCtrl as noteCtrl',
                      templateUrl: 'note/note.tpl.html'
                  }
              },
              data: {pageTitle: 'Noteless'}
            }

            var newNote = {
              name: 'new-note',
              url: '/new-note',
              views: {
                  "main": {
                      controller: 'NoteCtrl as noteCtrl',
                      templateUrl: 'note/note.tpl.html'
                  }
              },
              data: {pageTitle: 'Noteless'}
            }

            $stateProvider.state(notes);
            $stateProvider.state(newNote);

        }])
})();
