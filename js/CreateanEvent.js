var Events = document.getElementById("Event");
var Addr = document.getElementById("Add");
var HostN = document.getElementById("Host");
var EmailId = document.getElementById("Email");
var Da = document.getElementById("date");
var Ph = document.getElementById("Phone");
var De = document.getElementById("Desc");
var sub = document.getElementById("Sub");
var ngo_name, ngo_cnum, ngo_email;
var intr;
sub.addEventListener('click',addEvent);

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
      .get().then(function(doc) {
          ngo_name = doc.data().name;
          ngo_email = doc.data().email;
          ngo_cnum = doc.data().cnumber;
          
          console.log(ngo_email);
          document.getElementById('name_ngo').value = ngo_name;
          document.getElementById('email_ngo').value = ngo_email;
          document.getElementById('ngo_cnum').value = ngo_cnum;
      });
  }

function addEvent() {
    console.log("andar");
    firebase.firestore().collection("Events").doc().set({
        name : Events.value,
        addr : Addr.value,
        Hostn : HostN.value,
        HostEmail: EmailId.value,
        Date: Da.value,
        Desc: De.value,
        Phone: Ph.value,
        funds: "0",
        interested: "0",
        volunteer: "0",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        status: "pending",
        ngoName: ngo_name,
        ngoEmail: ngo_email,
        ngoCnum: ngo_cnum,
        card: '<div class="col sm"><div class="card" style="width: 18rem;"><div class="card-body" style="padding: 2rem" data-toggle="modal" data-target="#'+Events.value+'"><h5 class="card-title">'+Events.value+'</h5><h6 class="card-subtitle mb-2 text-muted">'+ngo_name+'</h6><p class="card-text">'+De.value+'</p><p class="card-text">Date: '+Da.value+'</p><p class="card-text">Location: '+Addr.value+'</p><a href="#" class="card-link">View more</a></div></div><div class="modal fade" id="'+Events.value+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h3 class="modal-title" id="exampleModalLongTitle">'+Events.value+'</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><h5>'+ngo_name+'</h5><br><p>'+De.value+'</p><p>Date: '+Da.value+'</p><p>Location: '+Addr.value+'</p></div><div class="modal-footer"><a href="ngo.html"><button type="button" class="btn btn-primary">Go to NGO page</button></a><button class="btn btn-primary" onclick="volunteer()">Volunteer</button><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div></div>'
       
    })


    firebase
      .firestore()
      .collection('Events')
      .where("ngoName","==",ngo_name).where("name","==",Events.value)
      .get().then(function(doc) {
          
          intr = doc.interested;
          console.log(intr);
          intr += 1;
        console.log(intr);
      });
}





