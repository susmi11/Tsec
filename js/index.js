var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');
var userEmailElement = document.getElementById('user-email');

var provider = new firebase.auth.GoogleAuthProvider();


initFirebaseAuth();
function initFirebaseAuth() {
    firebase.auth().onAuthStateChanged(authStateObserver);
  }
  function addSizeToGoogleProfilePic(url) {
    if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
      return url + '?sz=150';
    }
    return url;
  }

function authStateObserver(user) {
    if (user) { // User is signed in!
      // Get the signed-in user's profile pic and name.
      var profilePicUrl = getProfilePicUrl();
      var userName = getUserName();
      var userEmail = user.email;  
      // Set the user's profile pic and name.
      userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
      userNameElement.textContent = userName;
      userEmailElement.textContent = userEmail;
  
      // Show user's profile and sign-out button.
      userNameElement.removeAttribute('hidden');
      userPicElement.removeAttribute('hidden');
      userEmailElement.removeAttribute('hidden');
    //   signOutButtonElement.removeAttribute('hidden');
  
    //   // Hide sign-in button.
    //   signInButtonElement.setAttribute('hidden', 'true');
  
    //   // We save the Firebase Messaging Device token and enable notifications.
    //   saveMessagingDeviceToken();
    } else { // User is signed out!
      // Hide user's profile and sign-out button.
      userNameElement.setAttribute('hidden', 'true');
      userPicElement.setAttribute('hidden', 'true');
      userEmailElement.setAttribute('hidden', 'true');
    //   signOutButtonElement.setAttribute('hidden', 'true');
  
    //   // Show sign-in button.
    //   signInButtonElement.removeAttribute('hidden');
    }
  }

  // Returns the signed-in user's profile pic URL.
function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL;
  }
  
  // Returns the signed-in user's display name.
  function getUserName() {
    return firebase.auth().currentUser.displayName;
  }


  /////

  var ngo_div = document.getElementById("ngo_div");
  var event_div = document.getElementById("event_div");

  firebase.firestore().collection("NGO").where("value","==","1").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderNGO(doc);
      
    })
  });

  function renderNGO(doc) {
       var div = document.createElement("div");
       div = doc.data().card;
       document.getElementById("ngo_div").innerHTML += div;
  }

//   function ngo_page(email) {
//     firebase.firestore().collection("NGO").doc(email).get().then(function(doc) {
//           console.log(doc.id);
//           renderNGO(doc);
          
    
//       });
//   }

function ngo_page(email) {
    console.log(email);
    localStorage.setItem("email_ngo", email);
    console.log(email);

    // firebase.firestore().collection("NGO").doc(email).get().then(function(doc) {
    //     var omg = doc.data().name;
    //     console.log(omg);
    //     var div = document.createElement("div");
    //     div = doc.data().btn;
    //     console.log(div);
    //     document.getElementById("event_div").innerHTML += div;
    
    // });
    // firebase.firestore().collection("Events").where("ngoEmail","==","email").get().then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //     console.log(doc.id);
    //     renderEvent(doc);
        
    //     })
    // });
}

function renderEvent(doc) {
    var div = document.createElement("div");
       div = doc.data().card;
       document.getElementById("event_div").innerHTML += div;
}