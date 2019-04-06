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
    var email = $('#exampleInputEmail1').val().trim();
    // password = $('#exampleInputPassword1').val().trim();
    var myPassword = 'Password';
    var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    var res = String(password);
    window.alert(res);
    window.alert(`Username: ${email} ` + `Password: ${password}`);

    firebase.auth().createUserWithEmailAndPassword(email, res);

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(() => {
      // Email sent.
    }).catch((error) => {
      // An error happened.
    });
  });

  $('#login').on('click', (event) => {
    event.preventDefault();
    var email = $('#exampleInputEmail1').val().trim();
    // password = $('#exampleInputPassword1').val().trim();
    var myPassword = 'Password';
    var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    var resLogin = String(password);
    window.alert(resLogin);
    window.alert(`Username: ${email} ` + `Password: ${password}`);

    firebase.auth().signInWithEmailAndPassword(email, resLogin);


    var user = firebase.auth().currentUser;
    if (user) {
      window.alert('Success!');
    }
  });
});
