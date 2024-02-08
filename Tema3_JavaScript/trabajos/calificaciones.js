const lista = [];

function introducir() {
    
    var texto = document.getElementById("numero").value; 
    var numerot = parseFloat(texto);
    if(numerot >= 0  && numerot <= 10  ){
        lista.push(texto);

    let text = "<ul>";
    let fLen = lista.length;
    for (let i = 0; i < fLen; i++) {
      text += "<li>"  + lista[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;
    
        
        document.getElementById("error").innerHTML = "El numero tiene que estar entre 0 y 10.  tambien tiene que ser positivo";
        document.getElementById("error").innerHTML = "";
    }
    
    else {       
        document.getElementById("error").innerHTML = "Escriba un numero correcto";
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
        numero = parseFloat(lista[i]);
        total = total + numero;    
    }
    total = total / parseFloat(fLen);
    text += "<li>"  + total + "</li>";  
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;
    

}
