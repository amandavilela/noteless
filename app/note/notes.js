(function () {

  angular.module('myApp.note')
    .controller('NotesCtrl', NotesController);

  function NotesController($stateParams, $firebaseArray) {

    vm = this;
    var database = firebase.database().ref('notes');
    vm.notes = $firebaseArray(database);

    /*//Funcoes padrão do Firebase para escutar mudanças e inclusões de um Child.
    database.on('child_added', e => {
      vm.notes.push(e.val());
    });

    database.on('child_removed', e => {
      remove(e.val());
    });*/

    function getNote(id) {
      var note = vm.notes.map(function (x) { if (x.id == id) return x; else return "" });
      return note;
    }

    (function isEditing() {
      $stateParams.id ? vm.editing = true : vm.editing = false;
      if (vm.notes.length > 0) {
        vm.note = angular.copy(getNote($stateParams.id));
        console.log(note);
      }
    })();

    vm.add = add;
    function add(note) {
      var newKey = database.push().key;

      note = {"id":newKey,"subject":note.subject,"body":note.body, "postDate":Date()};

      var updates = {};
      updates[newKey] = note;

      database.update(updates);

      vm.notes.push(angular.copy(note));
      console.log(vm.notes);
    }

    vm.remove = remove;
    function remove(note) {
      var removeNote = vm.notes.indexOf(note);
      if (removeNote > -1) {
        database.child(vm.notes[removeNote].id).remove().then(function () {
                // File deleted successfully
                console.log("note has removed");
            }).catch(function (error) {
                // An error occurred!
                console.log(error.code + " - " + error.message);
            });

        vm.notes.splice(removeNote, 1);
      }
      console.log(vm.notes);
    }

    vm.save = save;
    function save(note) {
      var notes = vm.notes.map(function (el) {
        if (el.id === note.id) {
          return note;
        }
        return el;
      });
      vm.notes = notes;
      console.log(vm.notes);
    }

  }
})();
