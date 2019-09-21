var emailNgo=localStorage.getItem("email_ngo");
console.log(emailNgo);

var ngoDetails = document.getElementById("ngoDetails");
var eventDetails = document.getElementById("eventDetails");

firebase.firestore().collection("NGO").doc(emailNgo).get().then(function(doc) {

    console.log(doc.id);
    renderNGO(doc);
    

});

function renderNGO(doc) {
     var div = document.createElement("div");
     div = doc.data().detail;
     document.getElementById("ngoDetails").innerHTML += div;
}


  firebase.firestore().collection("Events").where("ngoEmail","==",emailNgo).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderEvents(doc);
      
    })
  });

  function renderEvents(doc) {
       var div = document.createElement("div");
       div = doc.data().card;
       document.getElementById("eventDetails").innerHTML += div;
  }
