
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

$("#medida").on('change', function() {
    console.log(this.value);
    // Aqui va la llamada AJAX con JQuery
    $.ajax({
        url:'http://localhost:5000/checksize', 
        type: 'POST',
        dataType: 'html',
        success: function(){
            if(document.getElementById("medida").value == "S"){
                document.getElementById("resultado_medida").innerHTML = "No disponible";
                event.preventDefault();
            }
        }
    });
});
   