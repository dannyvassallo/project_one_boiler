
$(document).ready(() => {
  const config = {
    apiKey: 'AIzaSyBiZI8F7hHMaxIdiE35dtF2zcyg2pecbSM',
    authDomain: 'eventualities-c1d22.firebaseapp.com',
    databaseURL: 'https://eventualities-c1d22.firebaseio.com',
    projectId: 'eventualities-c1d22',
    storageBucket: 'eventualities-c1d22.appspot.com',
    messagingSenderId: '612928900643',
  };
  firebase.initializeApp(config);

  $('#signup').on('click', (event) => {
    event.preventDefault();
    const email = $('#exampleInputEmail1').val().trim();
    const password = $('#exampleInputPassword1').val().trim();
    const name = $('#name').val().trim();
    const number = $('#ph-number').val().trim();
    const zip = $('#zip-code').val().trim();
    var newUser = {
      userName: name,
      phNumber: number,
      zipCode: zip
    };
    const user = firebase.auth().currentUser
    //console.log(newUser);
    //const myPassword = 'Password';
    //var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    //const res = String(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (user) {
          firebase.auth().signOut()
          window.location = 'http://localhost:3000/login';
        }
      })
      .catch((error) => {
        //const errorToast = error;
        $('#signup-error').text(error.message);
      })

    firebase.database().ref("/users/" + user.uid).child("/profile").push(newUser);

    $('#exampleInputEmail1').val('');
    $('#exampleInputPassword1').val('');
    $('#first-name').val('');
    $('#last-name').val('');
    $('#name').val("");
    $('#ph-number').val("");
    $('#zip-code').val("");
  });

  $('#login').on('click', (event) => {
    event.preventDefault();
    const email = $('#exampleInputEmail1').val().trim();
    const password = $('#exampleInputPassword1').val().trim();
    //const myPassword = 'Password';
    //var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    //const resLogin = String(password);
    //const user = firebase.auth().currentUser;

    firebase.auth().signInWithEmailAndPassword(email, password)
      // .then(function(user) {
      //   if(user){
      //     window.location = "http://localhost:3000"
      //   }
      // })

      .catch((error) => {
        const errorToast = error;
        $('#signin-error').text(errorToast.message);
        //location.reload();
      });

    $('#exampleInputEmail1').val('');
    $('#exampleInputPassword1').val('');
  });

  $('#reset').on('click', (event) => {
    event.preventDefault();
    const auth = firebase.auth();
    const emailAddress = $('#exampleInputEmail1').val().trim();

    //auth.sendPasswordResetEmail(emailAddress).then(() => {
      // Email sent.
    //}).catch((error) => {
      // An error happened.
    //});
    $('#exampleInputEmail1').val('');
  });

  $('#logout').on('click', (event) => {
    event.preventDefault();
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    //}).catch((error) => {
      // An error happened.
    //});

      const user = firebase.auth().currentUser;
      if (user) {
        //console.log(user);
        window.location = 'http://localhost:3000/login';
      }
    });
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user);
      console.log(email);
    } else {
    }
  });
});
