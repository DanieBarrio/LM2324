
const lista = [];

function aumentarbtt() {
    var texto = document.getElementById("aumentar").value; 
    lista.push(texto);

    let text = "<ol>";
    let fLen = lista.length;
    for (let i = 0; i < fLen; i++) {
      text += "<li>"  + lista[i] + "</li>";
    }
    text += "</ol>";
    document.getElementById("listado").innerHTML = text;
}

function borrar() {
  
}
 //lista.forEach(myFunction);
    //text += "</ul>";
    //document.getElementById("listado").innerHTML = text;
//function myFunction(value) {
//  text += "<li>" + value + "</li>";
//} 