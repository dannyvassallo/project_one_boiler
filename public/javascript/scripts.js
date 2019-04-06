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
    // password = $('#exampleInputPassword1').val().trim();
    const myPassword = 'Password';
    const password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    const res = String(password);

    firebase.auth().createUserWithEmailAndPassword(email, res);

    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(() => {
      // Email sent.
    }).catch((error) => {
      // An error happened.
    });
  });

  $('#login').on('click', (event) => {
    event.preventDefault();
    const email = $('#exampleInputEmail1').val().trim();
    // password = $('#exampleInputPassword1').val().trim();
    const myPassword = 'Password';
    const password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    const resLogin = String(password);

    firebase.auth().signInWithEmailAndPassword(email, resLogin);


    const user = firebase.auth().currentUser;
    if (user) {

    }
  });
});
