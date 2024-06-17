document.addEventListener('DOMContentLoaded', function() {
    // Configurar el valor mínimo de la fecha para que sea la fecha actual
    var fechaInput = document.getElementById('Fecha');
    var today = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('min', today);

    document.getElementById('submitBtn').addEventListener('click', function() {
        // Obtener los valores de los campos
        var nombre = document.getElementById('Nombre').value;
        var fono = document.getElementById('Fono').value;
        var fecha = document.getElementById('Fecha').value;
        var password = document.getElementById('Password').value;
        var pais = document.getElementById('Pais').value;
        var generoElement = document.querySelector('input[name="Genero"]:checked');
        var genero = generoElement ? generoElement.value : null;

        // Validar que todos los campos estén llenos
        if (nombre && fono && fecha && password && pais && genero) {
            // Mostrar los datos en un mensaje de alerta personalizado con formato HTML
            Swal.fire({
                title: 'Confirma tus datos!',
                html: `<p><strong>Nombre:</strong> ${nombre}</p>
                       <p><strong>Fono:</strong> ${fono}</p>
                       <p><strong>Fecha:</strong> ${fecha}</p>
                       <p><strong>Password:</strong> ${password}</p>
                       <p><strong>Ciudad:</strong> ${pais}</p>
                       <p><strong>Género:</strong> ${genero === 'm' ? 'Masculino' : 'Femenino'}</p>`,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});

