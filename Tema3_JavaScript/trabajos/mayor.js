function mayor(vector){
    let mayor=vector[0];
    for (var i=0; i<vector.length;i++){
        if (vector [i]>mayor)
            mayor= vector[i];

    }
    return mayor;
    //document.getElementById("resultado").innerHTML= mayor
}