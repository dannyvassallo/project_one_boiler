
$(document).ready(function() {
  var config = {
  apiKey: 'AIzaSyBiZI8F7hHMaxIdiE35dtF2zcyg2pecbSM',
  authDomain: 'eventualities-c1d22.firebaseapp.com',
  databaseURL: 'https://eventualities-c1d22.firebaseio.com',
  projectId: 'eventualities-c1d22',
  storageBucket: 'eventualities-c1d22.appspot.com',
  messagingSenderId: '612928900643',
  };
  firebase.initializeApp(config);

  $('#signup').on('click', function(event) {
    event.preventDefault();
    var email = $('#exampleInputEmail1').val().trim();
    var password = $('#exampleInputPassword1').val().trim();
    var myPassword = 'Password';
    //var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    var res = String(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then(function(userCredential) {
      if(user){
        window.location = "http://localhost:3000/login"
      }
    })
    .catch(function(error) {
       var errorToast = error;
       $('#signup-error').text(errorToast.message);
      });
    var user = firebase.auth().currentUser;

    $('#exampleInputEmail1').val("");
    $('#exampleInputPassword1').val("");
    $('#first-name').val("");
    $('#last-name').val("");
  });

  $('#login').on('click', function(event){
    event.preventDefault();
    var email = $('#exampleInputEmail1').val().trim();
    var password = $('#exampleInputPassword1').val().trim();
    var myPassword = 'Password';
    //var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    var resLogin = String(password);
    var user = firebase.auth().currentUser;

    firebase.auth().signInWithEmailAndPassword(email, password)

    // .then(function(userCredential) {
    //   if(user){
    //     window.location = "http://localhost:3000"
    //   }
    // })

    .catch(function(error) {
      var errorToast = error;
      $('#signin-error').text(errorToast.message);
    });

    $('#exampleInputEmail1').val("");
    $('#exampleInputPassword1').val("");
  });

  $('#reset').on('click', function(event){
    event.preventDefault();
    var auth = firebase.auth();
    var emailAddress = $('#exampleInputEmail1').val().trim();

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
    $('#exampleInputEmail1').val("");
  });

  $('#logout').on('click', function(event) {
    event.preventDefault();
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

    var user = firebase.auth().currentUser;
    if (user) {
      console.log(user);
      window.location = "http://localhost:3000/login";
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // console.log(user);
      // console.log(email);
    } else {
    }
  });
});
