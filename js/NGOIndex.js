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
        ngo_user = doc.data().name;
  
        document.getElementById('User').innerHTML = ngo_user;
      });
  }
  
  var ngo_div = document.getElementById('ngo_div');
  
  firebase
    .firestore()
    .collection('Events')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id);
        renderNGO(doc);
      });
    });
  
  function renderNGO(doc) {
    var div = document.createElement('div');
    div = doc.data().card;
    document.getElementById('ngo_div').innerHTML += div;
  }