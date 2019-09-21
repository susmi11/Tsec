firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    getEmail = firebaseUser.email;
    console.log(getEmail);

    auth();
  } else {
    console.log('not logged in');
    // setTimeout(doSomething, 6000);
    // function doSomething() {
    //   // alert("The password or email is incorrect");
    // }
  }
});

function auth() {
  firebase
    .firestore()
    .collection('NGO')
    .doc(getEmail)
    .get()
    .then(function(doc) {
      ngo_name = doc.data().name;
      ngo_email = doc.data().email;
      ngo_cnum = doc.data().cnumber;
      ngo_desc = doc.data().desc;
      ngo_upi = doc.data().upi;
      ngo_cause = doc.data().cause;
      ngo_site = doc.data().site;
      ngo_user = doc.data().name;
      console.log(ngo_email);

      document.getElementById('name_ngo').innerHTML = ngo_name;
      document.getElementById('email_ngo').innerHTML = ngo_email;
      document.getElementById('ngo_cnum').innerHTML = ngo_cnum;
      document.getElementById('Description').innerHTML = ngo_desc;
      document.getElementById('UPI').innerHTML = ngo_upi;
      document.getElementById('Cause').innerHTML = ngo_cause;
      document.getElementById('NGO_Site').innerHTML = ngo_site;
      document.getElementById('User').innerHTML = ngo_user;
    });
}