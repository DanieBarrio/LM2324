var Numeros = []

function add(){
    var n = parseFloat(document.getElementById("n").value);
    Numeros.push(n);
    document.getElementById('mostrar').innerHTML = Numeros;
}

var s = 0

function suma() {
    s = 0
    for (var i = 0 ; i< Numeros.length; i++){
        s += Numeros[i];

    }
    document.getElementById('mostar').innerHTML = s

}
