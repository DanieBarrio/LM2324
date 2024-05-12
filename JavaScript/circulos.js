function ocultar1() {
    var texto1 = (document.getElementById("texto1").innerHTML);
    
    if (texto1 == "Ocultar"){
        document.getElementById('texto1').innerHTML = 'Mostrar';
        document.getElementById("rojo").style.visibility="hidden";
    }   
    else{
        
        document.getElementById('texto1').innerHTML = 'Ocultar';
        document.getElementById("rojo").style.visibility="visible";
    }


}
function ocultar2() {
    var texto2 = (document.getElementById("texto2").innerHTML);
    
    if (texto2 == "Ocultar"){
        document.getElementById('texto2').innerHTML = 'Mostrar'
        document.getElementById("verde").style.visibility="hidden"
    }   
    else{
        document.getElementById('texto2').innerHTML = 'Ocultar'
        document.getElementById("verde").style.visibility="visible"
    }
}
function ocultar3() {
    var texto3 = (document.getElementById("texto3").innerHTML);
    if (texto3 == "Ocultar"){
        document.getElementById('texto3').innerHTML = 'Mostrar'
        document.getElementById("azul").style.visibility="hidden"
    }   
    else{
        document.getElementById('texto3').innerHTML = 'Ocultar'
        document.getElementById("azul").style.visibility="visible"
    }
}

