// Selección de elementos
const landing = document.getElementById('landing');
const loginSection = document.getElementById('loginSection');
const dashboardPostulante = document.getElementById('dashboardPostulante');
const dashboardEmpresa = document.getElementById('dashboardEmpresa');

const btnLogin = document.getElementById('btnLogin');
const btnRegistro = document.getElementById('btnRegistro');
const btnLogout = document.getElementById('btnLogout');
const btnEmpezarPostulante = document.getElementById('btnEmpezarPostulante');
const btnEmpezarEmpresa = document.getElementById('btnEmpezarEmpresa');

const formLogin = document.getElementById('formLogin');

// Oculta todas las secciones
function ocultarTodo() {
    landing.classList.add('d-none');
    loginSection.classList.add('d-none');
    dashboardPostulante.classList.add('d-none');
    dashboardEmpresa.classList.add('d-none');
}

// Mostrar la vista según rol
function mostrarDashboard(rol) {
    ocultarTodo();
    if (rol === 'postulante') {
        dashboardPostulante.classList.remove('d-none');
    } else if (rol === 'empresa') {
        dashboardEmpresa.classList.remove('d-none');
    }
    btnLogin.classList.add('d-none');
    btnRegistro.classList.add('d-none');
    btnLogout.classList.remove('d-none');
}

// Cerrar sesión
btnLogout.addEventListener('click', () => {
    localStorage.removeItem('rol');
    ocultarTodo();
    landing.classList.remove('d-none');
    btnLogin.classList.remove('d-none');
    btnRegistro.classList.remove('d-none');
    btnLogout.classList.add('d-none');
});

// Botones de navegación
btnLogin.addEventListener('click', () => {
    ocultarTodo();
    loginSection.classList.remove('d-none');
});

btnEmpezarPostulante.addEventListener('click', () => {
    ocultarTodo();
    loginSection.classList.remove('d-none');
    document.getElementById('loginRole').value = 'postulante';
});

btnEmpezarEmpresa.addEventListener('click', () => {
    ocultarTodo();
    loginSection.classList.remove('d-none');
    document.getElementById('loginRole').value = 'empresa';
});

// Simulación de login
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const rol = document.getElementById('loginRole').value;

    if (email && password && rol) {
        localStorage.setItem('rol', rol);
        mostrarDashboard(rol);
    } else {
        alert('Completa todos los campos');
    }
});

// Se verifica si hay una sesion abierta al recargar la pagina
document.addEventListener('DOMContentLoaded', () => {
    const rol = localStorage.getItem('rol');
    if (rol) {
        mostrarDashboard(rol);
    }
});
