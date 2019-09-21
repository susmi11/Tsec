
var table = document.getElementById("ngo-list");

function renderNGO(doc){
      
    console.log("render ke andar")
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);

    cell0.innerHTML = doc.data().name;
    cell1.innerHTML = doc.data().site;
    cell2.innerHTML = doc.data().email;
    cell3.innerHTML = doc.data().cnumber;
    cell4.innerHTML = doc.data().btn;
    
    
  }

firebase.firestore().collection("NGO").where("value","==","0").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderNGO(doc);
      
    })
  });
  
   function myfunction(email,password) {

      firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        setvalue(email);
        }).catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      // ...
    });
      

      

    //   firebase.firestore().collection("NGO").doc(email).set({
    //     value: "1",
    //    },{merge: true});

  }

  function setvalue(email) {
    firebase.firestore().collection("NGO").doc(email).set({
       value: "1",
        },{merge: true});
  }