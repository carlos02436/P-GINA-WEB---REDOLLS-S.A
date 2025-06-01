document.addEventListener('DOMContentLoaded', () => {
    const companyForm = document.getElementById('companyRegistrationForm');
    const addVacancyBtn = document.getElementById('addVacancyBtn');
    const addServiceBtn = document.getElementById('addServiceBtn');
    const vacanciesContainer = document.getElementById('vacanciesContainer');
    const servicesContainer = document.getElementById('servicesContainer');

    let vacancyCount = 0;
    let serviceCount = 0;

    const createDeleteButton = (handler) => {
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-2');
        deleteBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
            Eliminar`;
        deleteBtn.addEventListener('click', handler);
        return deleteBtn;
    };

    addVacancyBtn.addEventListener('click', () => {
        vacancyCount++;
        const vacancyIdSuffix = `v${vacancyCount}`; 
        const newVacancyEntry = document.createElement('div');
        newVacancyEntry.classList.add('vacancy-entry', 'mb-3', 'p-3', 'border', 'rounded'); 
        newVacancyEntry.setAttribute('id', `vacancy-entry-${vacancyIdSuffix}`);
        newVacancyEntry.innerHTML = `
            <h5>Servicio ${vacancyCount}</h5>
            <div class="mb-3">
                <label for="vacancyTitle-${vacancyIdSuffix}" class="form-label">Título del Servicio</label>
                <input type="text" class="form-control" id="vacancyTitle-${vacancyIdSuffix}" name="vacancies[${vacancyCount-1}][title]" required>
            </div>
            <div class="mb-3">
                <label for="vacancyDescription-${vacancyIdSuffix}" class="form-label">Descripción</label>
                <textarea class="form-control" id="vacancyDescription-${vacancyIdSuffix}" name="vacancies[${vacancyCount-1}][description]" rows="3" required></textarea>
            </div>
        `;
        const deleteBtn = createDeleteButton(() => {
            newVacancyEntry.remove();
        });
        newVacancyEntry.appendChild(deleteBtn);
        vacanciesContainer.appendChild(newVacancyEntry);
        
        const firstInput = newVacancyEntry.querySelector('input[type="text"]');
        if (firstInput) {
            firstInput.focus();
        }
    });

    companyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(companyForm);
        const data = {};

        for (let [key, value] of formData.entries()) {
            if (key.includes('[')) {
                const parts = key.split('[').map(part => part.replace(']', ''));
                let current = data;
                for (let i = 0; i < parts.length; i++) {
                    const part = parts[i];
                    if (i === parts.length - 1) {
                        current[part] = value;
                    } else {
                        if (!current[part]) {
                            current[part] = isNaN(parseInt(parts[i+1])) ? {} : [];
                        }
                        current = current[part];
                    }
                }
            } else {
                data[key] = value;
            }
        }
        
        if (data.vacancies) {
            data.vacancies = data.vacancies.filter(v => v !== null && v !== undefined && (typeof v === 'object' && Object.keys(v).length > 0));
        }
        if (data.services) {
            data.services = data.services.filter(s => s !== null && s !== undefined && (typeof s === 'object' && Object.keys(s).length > 0));
        }

        console.log('Form Data:', data);
        alert('Registro enviado. Revisa la consola para ver los datos.');
        
        companyForm.reset();
        vacanciesContainer.innerHTML = '';
        servicesContainer.innerHTML = '';
        vacancyCount = 0; 
        serviceCount = 0; 
    });
});