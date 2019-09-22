var table = document.getElementById("customers");
let i = 0;
function renderTable(doc){
    ++i;
    console.log("render ke andar")
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    

    cell0.innerHTML = i;
    cell1.innerHTML = doc.id;
    cell2.innerHTML = doc.data().count;
    
    
  }

  firebase.firestore().collection("Donate").orderBy('count','desc').get().then((snapshot) => {
   
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderTable(doc);
      
    })
  });
