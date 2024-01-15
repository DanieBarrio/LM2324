function convertir(temper){
    let valor =document.getElementById('temperatura').value;
    let resultado = 0;


    if(temper == 'celsius')
    {
        resultado = (valor - 32) *  5 / 9;

        document.getElementById('resultado').innerHTML = resultado + "ºC";

    }
    else
    {
        resultado = (valor * 9/5) + 32;

        document.getElementById('resultado').innerHTML = resultado + "ºF";
    }
}