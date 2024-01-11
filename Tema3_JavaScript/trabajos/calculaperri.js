function suma(){
    var usuario2 = parseInt(document.getElementById("usuario2").value);
    var contra2 = parseInt(document.getElementById("contr2").value);
    var total = usuario2 + contra2;
     document.getElementsByTagName("p")[0].innerHTML = total ;
}
function resta(){
    var usuario2 = parseInt(document.getElementById("usuario2").value);
    var contra2 = parseInt(document.getElementById("contr2").value);
    var total = usuario2 - contra2;
     document.getElementsByTagName("p")[0].innerHTML = total ;
}
function multiplicacion(){
    var usuario2 = parseInt(document.getElementById("usuario2").value);
    var contra2 = parseInt(document.getElementById("contr2").value);
    var total = usuario2 * contra2;
     document.getElementsByTagName("p")[0].innerHTML = total ;
}
function division(){
    var usuario2 = parseInt(document.getElementById("usuario2").value);
    var contra2 = parseInt(document.getElementById("contr2").value);
    var total = usuario2 / contra2;
     document.getElementsByTagName("p")[0].innerHTML = total ;
}