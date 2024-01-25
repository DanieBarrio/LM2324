var lista=[];

function aumentarbtt(){
    var texto = document.getElementById("aumentar").innerHTML;
    lista.push(texto);

   
    let text = "<ul>";
    //lista.forEach(myFunction);
    //text += "</ul>";
    //document.getElementById("listado").innerHTML = text;
    let fLen = lista.length;
    for (let i = 0; i < fLen; i++) {
      text += "<li>" + i + lista[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;
}

//function myFunction(value) {
//  text += "<li>" + value + "</li>";
//} 