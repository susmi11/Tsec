var payA = document.getElementById("payAmm");
var sub = document.getElementById("donate");
var payNgo = document.getElementById("payNgo");
sub.addEventListener('click',donate);

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      getEmail = firebaseUser.email;
      console.log(getEmail);

      
    } else {
      console.log('not logged in');
      // setTimeout(doSomething, 6000);
      // function doSomething() {
      //   // alert("The password or email is incorrect");
      // }
    }
  });

const increment = firebase.firestore.FieldValue.increment(1);
var x;

var y;
var z;
function donate() {
    console.log("hgsdf");
    
    firebase.firestore().collection("Donors").doc().set({
        Amount: payA.value,
        NGO: payNgo.value,
        email: getEmail,

    });
    contribute();
    ngo_funds();
}

function contribute() {
  firebase.firestore().collection("Donate").doc(getEmail).set({
    count : increment,
  },{merge: true});
}
var temp;
function ngo_funds() {
  firebase.firestore().collection("NGO").where("name","==",payNgo.value).get().then(function(querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(payA.value);
      x = Number(payA.value);
      y = doc.data().funds;
      console.log(y);
      z = Number(y);
      console.log(z);
      temp = doc.data().email;
     console.log(temp);
      z = z + x;
      console.log(z);
      sett(temp);
  })
  });
  
  
  
  
  
}
function sett(temp) {
  firebase.firestore().collection("NGO").doc(temp).set({
    funds: z,
  },{merge: true});
}

