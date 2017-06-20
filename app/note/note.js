(function () {

    angular.module('myApp.note')
        .controller('NoteCtrl',  NoteController);

    NoteController.$inject = ['$firebaseArray'];

    function NoteController($firebaseArray) {

        vm = this;

        var ref = firebase.database().ref();

        vm.notes = firebase.database().ref('notes');

        console.log(vm.notes);


    };
})();
