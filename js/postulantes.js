const listaVacantes = document.getElementById('listaVacantes');
const historialPostulaciones = document.getElementById('historialPostulaciones');

//Cargar vacantes desde el archivo 'vacantes.json'
function cargarVacantes() {
    fetch("/data/vacantes.json")
        .then(res => res.json())
        .then(data => {
            listaVacantes.innerHTML = ""
            data.forEach(vacante => {
                const card = document.createElement("div");
                card.className = "col-md-4 mb-3";
                card.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${vacante.titulo}</h5>
                        <p class="card-text">${vacante.descripcion}</p>
                        <p><strong>Requisitos:</strong>${vacante.requisitos}</p>
                        <p><strong>Modalidad:</strong>${vacante.modalidad}</p>
                        <button class="btn btn-primary btn-sm" onclick="postularme(${vacante.id}, '${vacante.titulo}')">Postularme</button>
                    </div>
                </div>
                `;
                listaVacantes.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Error cargando vacantes:", err);
        })
}

//Postulacion Simulada con LocalStorage
