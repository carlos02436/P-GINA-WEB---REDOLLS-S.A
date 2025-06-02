document.addEventListener('DOMContentLoaded', () => {
    // Envío de formulario principal
    document.getElementById('applicantRegistrationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí se podría agregar lógica para manejar los datos del formulario y el archivo
        const formData = new FormData(e.target);
        const cvFile = formData.get('cvFile');

        if (cvFile && cvFile.size > 0) {
            console.log('Hoja de vida cargada:', cvFile.name, cvFile.type, cvFile.size);
            // Procesar el archivo aquí (e.g., subirlo a un servidor)
        } else if (!cvFile || cvFile.size === 0 && e.target.querySelector('#cvFile').required) {
            alert('Por favor, cargue su hoja de vida.');
            return;
        }
        
        alert('Aspirante registrado correctamente.');
        e.target.reset(); // Opcional: Limpiar el formulario después del envío
    });
});