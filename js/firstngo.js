var loginNGO = document.getElementById("loginNGO");


loginNGO.addEventListener('click',login);

function login(){
    console.log("dfdd");
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(() => {
        window.location.href = "NGOIndex.html";
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error : " + errorMessage);
  
      // ...
    });

   
  
  }

//   firebase.auth().onAuthStateChanged(function(user) {
//     if(user) {
//         // User is signed in.
        
//     }
//     });
  
