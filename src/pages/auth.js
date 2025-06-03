// Système d'authentification

// Utilisateurs par défaut (à remplacer par une base de données dans un environnement de production)
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

// Fonction pour vérifier l'authentification
function authenticate(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    return user || null;
}

// Vérifier si l'utilisateur est connecté
function isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
}

// Vérifier le rôle de l'utilisateur
function hasRole(role) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user && user.role === role;
}

// Rediriger vers la page de connexion si non connecté
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Écouteurs d'événements
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de connexion
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const user = authenticate(username, password);
            
            if (user) {
                // Stocker les informations de l'utilisateur (sans le mot de passe)
                const userInfo = {
                    username: user.username,
                    role: user.role
                };
                sessionStorage.setItem('user', JSON.stringify(userInfo));
                window.location.href = 'index.html';
            } else {
                document.getElementById('error-message').textContent = 'Identifiant ou mot de passe incorrect';
            }
        });
    }
    
    // Protection des pages
    const protectedPages = ['index.html', 'vehicles.html', 'maintenance.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        requireAuth();
    }
    
    // Afficher le nom d'utilisateur si connecté
    if (isLoggedIn()) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const headerElement = document.querySelector('header');
        if (headerElement) {
            const userInfoDiv = document.createElement('div');
            userInfoDiv.className = 'user-info';
            userInfoDiv.innerHTML = `
                <span>Connecté en tant que: ${user.username}</span>
                <button id="logout-btn">Déconnexion</button>
            `;
            headerElement.appendChild(userInfoDiv);
            
            document.getElementById('logout-btn').addEventListener('click', function() {
                sessionStorage.removeItem('user');
                window.location.href = 'login.html';
            });
        }
    }
});
