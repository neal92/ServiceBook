// Gestion des utilisateurs

document.addEventListener('DOMContentLoaded', function() {
    // Vérifier que l'utilisateur est admin
    if (!hasRole('admin')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Charger la liste des utilisateurs
    loadUsers();
    
    // Ajouter un utilisateur
    const addUserForm = document.getElementById('addUserForm');
    if (addUserForm) {
        addUserForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            const role = document.getElementById('userRole').value;
            
            // Vérifier si l'utilisateur existe déjà
            if (users.some(u => u.username === username)) {
                alert('Cet identifiant est déjà utilisé');
                return;
            }
            
            // Ajouter l'utilisateur
            users.push({
                username,
                password,
                role
            });
            
            // Dans un environnement réel, on sauvegarderait dans une BDD ici
            
            // Mise à jour de l'affichage
            loadUsers();
            addUserForm.reset();
        });
    }
});

// Afficher les utilisateurs dans le tableau
function loadUsers() {
    const usersTableBody = document.getElementById('usersTableBody');
    if (!usersTableBody) return;
    
    usersTableBody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.role === 'admin' ? 'Administrateur' : 'Utilisateur'}</td>
            <td>
                <button class="delete-btn" data-username="${user.username}">Supprimer</button>
                <button class="reset-pwd-btn" data-username="${user.username}">Réinitialiser MDP</button>
            </td>
        `;
        
        usersTableBody.appendChild(row);
    });
    
    // Ajouter les écouteurs d'événements aux boutons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            if (username === 'admin') {
                alert('Impossible de supprimer le compte administrateur principal');
                return;
            }
            
            const index = users.findIndex(u => u.username === username);
            if (index !== -1) {
                users.splice(index, 1);
                loadUsers();
            }
        });
    });
    
    document.querySelectorAll('.reset-pwd-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            const newPassword = prompt('Nouveau mot de passe pour ' + username + ':');
            
            if (newPassword) {
                const user = users.find(u => u.username === username);
                if (user) {
                    user.password = newPassword;
                    alert('Mot de passe modifié avec succès');
                }
            }
        });
    });
}
