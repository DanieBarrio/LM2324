function Sesion() {
    
    var usuario = document.getElementById("usuario").value;
    var contra = document.getElementById("contr").value;

    if(usuario == "" || contra == "" ){
        alert("Rellene los campos de usuario y contraseña");
    }
    else
    alert('El usuario es ' + usuario +'y la contraseña es ' + contra);
}