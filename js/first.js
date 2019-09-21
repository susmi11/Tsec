var login_user = document.getElementById("login_user");
var login_ngo = document.getElementById("login_ngo");

var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');
var userEmailElement = document.getElementById('user-email');
var provider = new firebase.auth.GoogleAuthProvider();
login_user.addEventListener('click',loginUser);

function loginUser() {
    console.log("sign");
    firebase.auth().signInWithPopup(provider).then(function(result){
      console.log("hgfh");
      var token = result.credential.accessToken;
      var user = result.user;
      
      console.log(token)
      console.log(user)
      window.location.href = "index.html";
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

// initFirebaseAuth();

// function initFirebaseAuth() {
//     firebase.auth().onAuthStateChanged(authStateObserver);
//   }

//   function authStateObserver(user) {
//     if (user) { // User is signed in!
//       // Get the signed-in user's profile pic and name.
//       var profilePicUrl = getProfilePicUrl();
//       var userName = getUserName();
//       var userEmail = user.email;  
//       // Set the user's profile pic and name.
//       userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
//       userNameElement.textContent = userName;
//       userEmailElement.textContent = userEmail;
  
//       // Show user's profile and sign-out button.
//       userNameElement.removeAttribute('hidden');
//       userPicElement.removeAttribute('hidden');
//       userEmailElement.removeAttribute('hidden');
//     //   signOutButtonElement.removeAttribute('hidden');
  
//     //   // Hide sign-in button.
//     //   signInButtonElement.setAttribute('hidden', 'true');
  
//     //   // We save the Firebase Messaging Device token and enable notifications.
//     //   saveMessagingDeviceToken();
//     } else { // User is signed out!
//       // Hide user's profile and sign-out button.
//       userNameElement.setAttribute('hidden', 'true');
//       userPicElement.setAttribute('hidden', 'true');
//       userEmailElement.setAttribute('hidden', 'true');
//     //   signOutButtonElement.setAttribute('hidden', 'true');
  
//     //   // Show sign-in button.
//     //   signInButtonElement.removeAttribute('hidden');
//     }
//   }

//   // Returns the signed-in user's profile pic URL.
// function getProfilePicUrl() {
//     return firebase.auth().currentUser.photoURL;
//   }
  
//   // Returns the signed-in user's display name.
//   function getUserName() {
//     return firebase.auth().currentUser.displayName;
//   }

  ///////////////
  var register = document.getElementById("register");
  $(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  document.getElementById("register").style.display = "block";
  document.getElementById("loginNGO").style.display = "none";
  document.getElementById("userLogin").style.display = "none";
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  document.getElementById("userLogin").style.display = "block";
  document.getElementById("loginNGO").style.display = "block";
  document.getElementById("register").style.display = "none";
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});