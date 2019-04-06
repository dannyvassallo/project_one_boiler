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
    email = $('#exampleInputEmail1').val().trim();
    //password = $('#exampleInputPassword1').val().trim();
    const myPassword = 'Password';
    password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    var res = String(password);
    window.alert(res);
    window.alert(`Username: ${email} ` + `Password: ${password}`);

    firebase.auth().createUserWithEmailAndPassword(email, res);

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  });

  $('#login').on('click', (event) => {
    event.preventDefault();
    email = $('#exampleInputEmail1').val().trim();
    //password = $('#exampleInputPassword1').val().trim();
    const myPassword = 'Password';
    password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    var resLogin = String(password);
    window.alert(resLogin);
    window.alert(`Username: ${email} ` + `Password: ${password}`);

    firebase.auth().signInWithEmailAndPassword(email, resLogin);


    user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      window.alert('Success!');
    }


  });
});
