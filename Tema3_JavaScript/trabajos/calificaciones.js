const lista = [];

function introducir() {
    
    var texto = document.getElementById("numero").value; 
    var numerot = parseFloat(texto);
    if(numerot < 0  ||numerot > 10  ){
        alert("El numero tiene que estar entre 0 y 10.  tambien tiene que ser positivo")
    }
    else {
       
    lista.push(texto);

    let text = "<ul>";
    let fLen = lista.length;
    for (let i = 0; i < fLen; i++) {
      text += "<li>"  + lista[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;
    
    }
    document.getElementById("numero").value = "";
}
function borrar(){
    

    
    let fLen = lista.length;
    while(fLen > 0 ){
        lista.pop();
        fLen = lista.length;
    }

    document.getElementById("listado").innerHTML = "";
    
}
function media(){
    let text = "<ul>";
    let fLen = lista.length;
    var total = 0;
    var numero = 0;
    for (let i = 0; i < fLen; i++) {
        if (lista[i] % 2 === 0) {
            numero = parseFloat(lista[i])
            total = total + numero;
            
            
          } else {
           
          }
          
    }
    text += "<li>"  + total + "</li>";  
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;
    

}
