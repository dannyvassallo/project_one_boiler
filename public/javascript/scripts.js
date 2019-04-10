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
    // eslint-disable-next-line no-undef
    email = $('#exampleInputEmail1').val().trim();
    // password = $('#exampleInputPassword1').val().trim();
    const myPassword = 'Password';
    // eslint-disable-next-line no-undef
    password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    const res = String(password);
    /* eslint-disable */

    window.alert(res);
    window.alert(`Username: ${email} ` + `Password: ${password}`);

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
    email = $('#exampleInputEmail1').val().trim();
    // password = $('#exampleInputPassword1').val().trim();
    const myPassword = 'Password';
    password = CryptoJS.AES.encrypt($('#exampleInputPassword1').val().trim(), myPassword);
    const resLogin = String(password);
    window.alert(resLogin);
    window.alert(`Username: ${email} ` + `Password: ${password}`);

    firebase.auth().signInWithEmailAndPassword(email, resLogin);


    user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      window.alert('Success!');
        /* eslint-enable */
    }
  });
});
