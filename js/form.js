// Inicializar el mapa
function initMap() {
    const location = { lat: 40.4168, lng: -3.7038 }; // Madrid
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Validar formulario al enviar
document.getElementById('contactForm').onsubmit = function () {
    let isValid = true; // Bandera para determinar si el formulario es válido

    // Lista de campos a validar
    const fields = [
        { id: 'nombre', message: 'El nombre es obligatorio' },
        { id: 'apellidos', message: 'Los apellidos son obligatorios' },
        { id: 'email', message: 'Se requiere un correo electrónico válido' },
        { id: 'telefono', message: 'Se requiere un número de teléfono válido' },
        { id: 'opciones', message: 'Debes seleccionar un tema del formulario' }
    ];

    // Validar cada campo
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.getElementById(field.id + 'Error');
        const label = input.previousElementSibling;

        if (!input.value.trim()) {
            // Mostrar error si el campo está vacío
            input.style.borderColor = 'red';
            label.style.color = 'red';
            errorSpan.textContent = field.message;
            errorSpan.style.display = 'block';
            isValid = false; // Marcar el formulario como inválido
        } else {
            // Restaurar estilos si el campo es válido
            input.style.borderColor = '';
            label.style.color = '';
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
    });

    // Si hay errores, mostrar alerta y detener el envío
    if (!isValid) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Detener el envío del formulario
    }

    // Si no hay errores, permitir el envío
    alert('Formulario enviado correctamente.');
    return true;
};
