(function() {
    angular.module( 'myApp.note', [
        'ui.router',
        'firebase'
    ]);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCxvttp_OVSCdtJ1nZV5_TQOTCduvgmFcE",
      authDomain: "noteless-94689.firebaseapp.com",
      databaseURL: "https://noteless-94689.firebaseio.com",
      projectId: "noteless-94689",
      storageBucket: "noteless-94689.appspot.com",
      messagingSenderId: "304684826102"
    };
    firebase.initializeApp(config);

})();
