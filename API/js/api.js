function buscar() {
  const username = document.getElementById("username").value;

  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      const avatarUrl = data.avatar_url;
      const avatarElement = document.getElementById("avatar");

      avatarElement.innerHTML = `<img src="${avatarUrl}">`;
      document.getElementById("github").innerHTML = "GitHub: " + data.login;
      document.getElementById("nombre").innerHTML = "Nombre: " + (data.name ? data.name : "Información no disponible");
      document.getElementById("descripcion").innerHTML = "Descripción: " + (data.bio ? data.bio : "Información no disponible");
      document.getElementById("seguidores").innerHTML = "Seguidores: " + (data.followers ? data.followers : "Información no disponible");
      document.getElementById("repos").innerHTML = "Repos públicos: " + (data.public_repos ? data.public_repos : "Información no disponible");

      return fetch(data.repos_url);

    })

    .then(response => response.json())
    .then(repos => {
      // Sumar el número total de estrellas de los repositorios públicos
      const stars = repos.reduce((total, repo) => total + repo.stargazers_count, 0);

      // Actualizar el contenido del elemento "stars"
      const starsContainer = document.getElementById("stars");
      if (stars > 0) {
        const starsElement = document.createElement("div");

        for (let i = 0; i < stars; i++) {
          const star = document.createElement("span");
          star.className = "fa fa-star";
          starsElement.appendChild(star);
        }

        starsContainer.innerHTML = '';
        document.getElementById("stars").innerHTML = stars;
        starsContainer.appendChild(starsElement);
      } else {
        document.getElementById("stars").innerHTML= "Sin Estrellas";
      }

    })

    .catch(error => console.error(error));
}
