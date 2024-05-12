var pos = 0, test, examen, pregunta, opcion,Ch1 ,correctas = 0;

var total = pregunta.length;
function hacerPreguntas(){
    test = document.getElementById('Examen');
    if (pos >= total)
    {
        test.innerHTML = "<h2>Conseguistes acertar "+ correctas + "de "+ total;
        document.getElementById("estado").innerHTML = "Prueba completa";
        pos= 0
        correctas =0;
        return false;

    }
    

}


windows.