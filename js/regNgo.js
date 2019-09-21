var emailNgo = document.getElementById("emailNGO");
var passNgo = document.getElementById("passNGO");

var regNGO = document.getElementById("regNGO");

var ngo_name = document.getElementById("ngo_name");
var ngo_site = document.getElementById("ngo_site");
var ngo_cnum = document.getElementById("ngo_cnum");
var ngo_desc = document.getElementById("ngo_desc");
var ngo_cause = document.getElementById("ngo_cause");
var ngo_upi = document.getElementById("ngo_upi");

regNGO.addEventListener('click',register);

function register() {
    console.log("regg");
    firebase.firestore().collection("NGO").doc(emailNgo.value).set({
        value: "0",
        password: passNgo.value,
        name: ngo_name.value,
        site: ngo_site.value,
        cnumber: ngo_cnum.value,
        email: emailNgo.value,
        desc: ngo_desc.value,
        cause: ngo_cause.value,
        upi: ngo_upi.value,
        btn: '<button type="submit" id="'+emailNgo.value+'" onclick=myfunction("'+ emailNgo.value +'","'+passNgo.value+'")>Verified</button>',
        card: '<div class="col sm"><div class="card" style="width: 18rem;"><div class="card-body" style="padding: 2rem" data-toggle="modal" data-target="#'+ngo_name.value+'"><h5 class="card-title">'+ngo_name.value+'</h5><h6 class="card-subtitle mb-2 text-muted">'+ngo_cause.value+'</h6><p class="card-text">'+ngo_desc.value+'</p><p class="card-text">Contact no.:'+ngo_cnum.value+'</p><p class="card-text">'+emailNgo.value+'</p><a href="#" class="card-link">View more</a></div></div><div class="modal fade" id="'+ngo_name.value+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h3 class="modal-title" id="exampleModalLongTitle">'+ngo_name.value+'</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><h5>'+ngo_cause.value+'</h5><br><p>'+ngo_desc.value+'</p></div><div class="modal-footer"><a href="ngo.html"><button type="button" class="btn btn-primary" onclick=ngo_page("'+emailNgo.value+'")>Go to NGO page</button></a><a href="temp.php"><button class="btn btn-primary">Donate now</button></a><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div></div>',
        detail: '<div class="col-md-5 col-8 align-self-center"><h1 class="text-themecolor" style="margin-top: 1.5rem">'+ngo_name.value+'</h1></div><div class="col-md-7 col-4 align-self-center"><div class="d-flex m-t-10 justify-content-end"><div class="d-flex m-r-20 m-l-10 hidden-md-down"><div class="chart-text m-r-10"><h6 class="m-b-0"><small>Contact us</small></h6><h4 class="m-t-0 text-primary">'+emailNgo.value+'</h4></div></div><div class=""><button class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings text-white"></i></button></div></div></div></div><div class="row"><h2>'+ngo_cause.value+'</h2></div><div class="row"><p>'+ngo_desc.value+'</p></div><br>'
    });
}