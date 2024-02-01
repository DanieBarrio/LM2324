function validar(elementos)
{
    let estanCorrectos = true
        
   for(var i=0;i<elementos.length; i++) 
   {

    if(elementos[i].value == "" || !elementos[i].checked)
    {

        estanCorrectos = false
    }

   }
    
    estanCorrectos = false

    
    return estanCorrectos;
}