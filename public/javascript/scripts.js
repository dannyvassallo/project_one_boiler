/* eslint-disable no-useless-concat */
/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-expressions
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({
  id: 18, cityid: '', appid: 'e1eb6cf9d4bcb08d8495b7bd15e2947f', units: 'imperial', containerid: 'openweathermap-widget-18',
  // eslint-disable-next-line func-names
}); (function () { const script = document.createElement('script'); script.async = true; script.charset = 'utf-8'; script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js'; const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); }());


$(document).ready(() => {
  const config = {
    apiKey: 'AIzaSyBiZI8F7hHMaxIdiE35dtF2zcyg2pecbSM',
    authDomain: 'eventualities-c1d22.firebaseapp.com',
    databaseURL: 'https://eventualities-c1d22.firebaseio.com',
    projectId: 'eventualities-c1d22',
    storageBucket: 'eventualities-c1d22.appspot.com',
    messagingSenderId: '612928900643',
  };
  // eslint-disable-next-line no-undef
  firebase.initializeApp(config);

  $('#signup').on('click', (event) => {
    event.preventDefault();
    const email = $('#exampleInputEmail1').val().trim();
    const password = $('#exampleInputPassword1').val().trim();
    const name = $('#name').val().trim();
    const number = $('#ph-number').val().trim();
    const zip = $('#zip-code').val().trim();
    const newUser = {
      userName: name,
      phNumber: number,
      zipCode: zip,
    };
    const user = firebase.auth().currentUser;
    // console.log(newUser);
    // const myPassword = 'Password';
    // const encryptedPassword = CryptoJS.AES.encrypt
    // ($('#exampleInputPassword1').val().trim(), password);
    // const res = String(encryptedPassword);
    // const decryptedPassword = CryptoJS.AES.decrypt(res, password);
    // const decryptedToString = decryptedPassword.toString(CryptoJS.enc.Utf8);
    // window.alert(encryptedPassword)
    // window.alert(res)
    // window.alert(decryptedPassword)
    // window.alert(decryptedToString)

    firebase.auth().createUserWithEmailAndPassword(email, password);

    // var password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    // const res = String(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      // .then((userCredential) => {
      //   if (user) {
      //     firebase.auth().signOut();
      //     window.location = 'http://localhost:3000/login';
      //   }
      // })
      .catch((error) => {
        // const errorToast = error;
        // location.reload();
        $('#signup-error').text(error.message);
      });


    firebase.database().ref(`/users/${user.uid}`).child('/profile').push(newUser);

    $('#exampleInputEmail1').val('');
    $('#exampleInputPassword1').val('');
    $('#first-name').val('');
    $('#last-name').val('');
    $('#name').val('');
    $('#ph-number').val('');
    $('#zip-code').val('');
  });

  $('#login').on('click', (event) => {
    event.preventDefault();

    const email = $('#exampleInputEmail1').val().trim();
    const password = $('#exampleInputPassword1').val().trim();
    // const myPassword = 'Password';
    // const encryptedPassword = CryptoJS.AES.encrypt
    // ($('#exampleInputPassword1').val().trim(), Password);
    // const res = String(encryptedPassword);
    // window.alert(encryptedPassword)
    // window.alert(res)
    // const decryptedPassword = CryptoJS.AES.decrypt(res, password);
    // const decryptedToString = decryptedPassword.toString(CryptoJS.enc.Utf8);
    // const resLogin = String(password);
    // const user = firebase.auth().currentUser;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          window.location = 'http://localhost:3000/booking';
        }
      })
      .catch((error) => {
        const errorToast = error;
        $('#signin-error').text(errorToast.message);
        // setTimeout(() => { location.reload(); }, 3000);
      });

    $('#exampleInputEmail1').val('');
    $('#exampleInputPassword1').val('');
  });

  $('#reset').on('click', (event) => {
    event.preventDefault();
    const auth = firebase.auth();
    const emailAddress = $('#exampleInputEmail1').val().trim();
    auth.sendPasswordResetEmail(emailAddress).then(() => {
    // Email sent.
    // }).catch((error) => {
    // An error happened.
    });
    $('#exampleInputEmail1').val('');
  });

  $('#logout').on('click', (event) => {
    event.preventDefault();
    firebase.auth().signOut();
    // Sign-out successful.
    // }).catch((error) => {
    // An error happened.
    // });

    const user = firebase.auth().currentUser;
    if (user) {
      // console.log(user);
      window.location = 'http://localhost:3000/login';
    }
  });

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //   // User is signed in.
  //     const { displayName } = user;
  //     const { email } = user;
  //     const { emailVerified } = user;
  //     const { photoURL } = user;
  //     const { isAnonymous } = user;
  //     const { uid } = user;
  //     const { providerData } = user;
  //     console.log(user);
  //     console.log(email);
  //   } else {
  //   }
  // });
});
