// Données des propriétés (à remplacer par des données réelles provenant d'une API ou d'une base de données)
const properties = [
  { id: 1, address: "123 Rue de la Paix, Paris", type: "Appartement", surface: 75, rent: 1500, status: "Occupé" },
  { id: 2, address: "45 Avenue des Champs-Élysées, Paris", type: "Commerce", surface: 120, rent: 3500, status: "Occupé" },
  { id: 3, address: "78 Rue du Faubourg Saint-Honoré, Paris", type: "Bureau", surface: 200, rent: 4000, status: "Vacant" },
  { id: 4, address: "12 Place Vendôme, Paris", type: "Appartement", surface: 100, rent: 2500, status: "Occupé" },
  { id: 5, address: "34 Rue de Rivoli, Paris", type: "Maison", surface: 150, rent: 3000, status: "Occupé" },
];

// Fonction pour afficher les propriétés
function displayProperties(props) {
  const propertiesList = document.getElementById('properties-list');
  propertiesList.innerHTML = '';
  props.forEach(property => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${property.address}</td>
            <td class="px-6 py-4 whitespace-nowrap">${property.type}</td>
            <td class="px-6 py-4 whitespace-nowrap">${property.surface}</td>
            <td class="px-6 py-4 whitespace-nowrap">${property.rent} €</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.status === 'Occupé' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    ${property.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-indigo-600 hover:text-indigo-900 mr-2">Modifier</button>
                <button class="text-red-600 hover:text-red-900">Supprimer</button>
            </td>
        `;
    propertiesList.appendChild(row);
  });
}

// Fonction de recherche
function setupPropertySearch() {

  document.getElementById('property-search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProperties = properties.filter(property =>
      property.address.toLowerCase().includes(searchTerm) ||
      property.type.toLowerCase().includes(searchTerm)
    );
    displayProperties(filteredProperties);
  });
}

// Fonction de filtrage par type
function setupPropertyFilter() {

  document.getElementById('property-type-filter').addEventListener('change', function (e) {
    const filterType = e.target.value;
    const filteredProperties = filterType
      ? properties.filter(property => property.type === filterType)
      : properties;
    displayProperties(filteredProperties);
  });
}

// Fonction de tri
function setupPropertySort() {
  document.getElementById('property-sort').addEventListener('change', function (e) {
    const sortBy = e.target.value;
    const sortedProperties = [...properties].sort((a, b) => {
      if (sortBy === 'address') return a.address.localeCompare(b.address);
      if (sortBy === 'type') return a.type.localeCompare(b.type);
      if (sortBy === 'rent') return a.rent - b.rent;
    });
    displayProperties(sortedProperties);
  });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export function initializeProperties() {
  displayProperties(properties)
  setupPropertySearch()
  setupPropertyFilter()
  setupPropertySort()
}