const API_URL = 'https://xivapi.com';

function fetchResources() {
  fetch(`${API_URL}/item`)
    .then(response => response.json())
    .then(data => {
      const resources = data.Results;
      const resourcesContainer = document.getElementById('resources');
      
      resources.forEach(resource => {
        const resourceElement = document.createElement('div');
        resourceElement.innerHTML = `
          <h2>${resource.Name}</h2>
          <img src="${API_URL}${resource.Icon}" alt="${resource.Name} icon">
          <p>${resource.Description}</p>
        `;
        resourcesContainer.appendChild(resourceElement);
      });
    })
    .catch(error => console.log(error));
}

fetchResources();
