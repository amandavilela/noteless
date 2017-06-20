(function () {

  angular.module('myApp.note')
    .controller('NotesCtrl', NotesController);


  function NotesController($firebaseObject, $stateParams) {

    const ref = firebase.database().ref('notes');
    //const ref_ = roofRef.child('object');
    //this.object = $firebaseObject(ref);
  
    //Funcoes padrão do Firebase para escutar mudanças e inclusões de um Child.
    var notes = [];  
    ref.on('child_added', e => {
      notes.push(e.val());
      console.log(e.val());
    });

    ref.on('child_removed', e => {
      remove(e.val());
    });

    vm = this;


    vm.notes = [
      {
        "body": "Body Teste",
        "id": "ID0222021",
        "date": "10/10/2017 08:00:00",
        "title": "Nota 1"
      },
      {
        "body": "Body Teste",
        "id": "ID0222022",
        "date": "10/10/2017 08:00:00",
        "title": "Nota 2"
      },
      {
        "body": "Body Teste",
        "id": "ID0222023",
        "date": "10/10/2017 08:00:00",
        "title": "Nota 3"
      }
    ];

    function getNote(id) {
      var note = vm.notes.reduce(function(x) { if (x.id == id) return x; else return ""});
      return note;
    }

    (function isEditing () {
      $stateParams.id ? vm.editing = true : vm.editing = false;
      vm.note = angular.copy(getNote($stateParams.id));
    })();

    vm.add = add;
    function add(note) {
      vm.notes.push(angular.copy(note));
      console.log(vm.notes);
    }

    vm.remove = remove;
    function remove(note) {
      var removeNote = vm.notes.indexOf(note);
      if (removeNote > -1) {
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

  };
})();
