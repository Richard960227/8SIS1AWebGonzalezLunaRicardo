function buscar() {
  const language = document.getElementById("language").value;
  const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;

  alert("Conoce Usuarios de GitHub en el Lenguaje de Programacion que buscas, si tu busqueda no cuenta con información actualiza o intentalo más tarde, ya que responde a varias solicitudes.");
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const repos = data.items;

      // Obtener los usuarios que han creado los repositorios con mejor calificación
      const users = repos.map(repo => repo.owner.login);

      // Obtener información de cada usuario
      Promise.all(users.map(user => fetch(`https://api.github.com/users/${user}`)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(users => {
          // Crear un elemento div para cada usuario
          const userElements = users.map(user => {
            const element = document.createElement("div");
            element.classList.add("user-item"); // Agregar clase CSS
            element.innerHTML = `
              <div class="avatar-container">
                <img class="avatar" src="${user.avatar_url}">
              </div>
              <div class="user-info">
                <h3>${user.name ? user.name : "Información no disponible"}</h3>
                <p>GitHub: ${user.login}</p>
                <p>Descripción: ${user.bio ? user.bio : "Información no disponible"}</p>
                <p>Seguidores: ${user.followers ? user.followers : "Información no disponible"}</p>
                <p>Repos públicos: ${user.public_repos ? user.public_repos : "Información no disponible"}</p>
              </div>
            `;
            return element;
          });

          // Actualizar el contenido del elemento "githubs" con la lista de usuarios
          const userContainer = document.getElementById("githubs");
          userContainer.innerHTML = '';
          if (userElements.length > 0) {
            userElements.forEach(element => {
              userContainer.appendChild(element);
            });
          } else {
            userContainer.innerHTML = "Sin usuarios encontrados.";
          }
          
        })
    })
    .catch(error => console.error(error));
}
