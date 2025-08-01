
// Redirige al login si no hay token en el localStorage
window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }
});

// Evita que el usuario navegue hacia atrás usando el botón de retroceso del navegador
history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function (event) {
    history.pushState(null, document.title,
         location.href);
});

// Función para cerrar sesión
function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}
