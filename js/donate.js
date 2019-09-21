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


function donate() {
    console.log("hgsdf");

    firebase.firestore().collection("Donors").doc().set({
        Amount: payA.value,
        NGO: payNgo.value,
        email: getEmail

    });
}