$(document).ready(function() {
  // Inicializando firebase
  var config = {
    apiKey: 'AIzaSyDHyANUi8mFqBD0mU-3G7-OGCVYPdZokRo',
    authDomain: 'red-social-x.firebaseapp.com',
    databaseURL: 'https://red-social-x.firebaseio.com',
    projectId: 'red-social-x',
    storageBucket: '',
    messagingSenderId: '795353793299'
  };
  firebase.initializeApp(config);

  // dando funcionalidad al boton de sign out
  $('#logout').on('click', function() {
    firebase.auth().signOut().then(function() {
      console.log('saliste');
      window.location.href = '../views/login.html';
    });
  });
});
