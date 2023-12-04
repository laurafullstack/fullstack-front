
document.getElementById("formulario").addEventListener("submit", 
    function(event) {
        if(document.getElementById("nombre-cliente").value == ""){
            document.getElementById("label-nombre").style.color = "red";
            event.preventDefault();
        }
        if(document.getElementById("apellidos-cliente").value == ""){
            document.getElementById("label-apellidos").style.color = "red";
            event.preventDefault();
        }  
    }
);