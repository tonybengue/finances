// Données des locataires (à remplacer par des données réelles provenant d'une API ou d'une base de données)
const tenants = [
  { id: 1, name: "Jean Dupont", property: "123 Rue de la Paix, Paris", rent: 1500, rentDueDate: "2023-06-05", status: "À jour" },
  { id: 2, name: "Marie Martin", property: "45 Avenue des Champs-Élysées, Paris", rent: 3500, rentDueDate: "2023-06-10", status: "En retard" },
  { id: 3, name: "Pierre Durand", property: "78 Rue du Faubourg Saint-Honoré, Paris", rent: 2000, rentDueDate: "2023-06-15", status: "À jour" },
  { id: 4, name: "Sophie Lefebvre", property: "12 Place Vendôme, Paris", rent: 2500, rentDueDate: "2023-06-20", status: "Préavis" },
  { id: 5, name: "Luc Moreau", property: "34 Rue de Rivoli, Paris", rent: 1800, rentDueDate: "2023-06-25", status: "À jour" },
];

// Fonction pour afficher les locataires
function displayTenants(tenants) {
  const tenantsList = document.getElementById('tenants-list');
  tenantsList.innerHTML = '';
  tenants.forEach(tenant => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap">${tenant.name}</td>
          <td class="px-6 py-4 whitespace-nowrap">${tenant.property}</td>
          <td class="px-6 py-4 whitespace-nowrap">${tenant.rent} €</td>
          <td class="px-6 py-4 whitespace-nowrap">${formatDate(tenant.rentDueDate)}</td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(tenant.status)}">
                  ${tenant.status}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button class="text-indigo-600 hover:text-indigo-900 mr-2">Détails</button>
              <button class="text-red-600 hover:text-red-900">Contacter</button>
          </td>
      `;
    tenantsList.appendChild(row);
  });
}

// Fonction pour formater la date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Fonction pour obtenir la couleur du statut
function getStatusColor(status) {
  switch (status) {
    case 'À jour':
      return 'bg-green-100 text-green-800';
    case 'En retard':
      return 'bg-red-100 text-red-800';
    case 'Préavis':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

// Fonction de recherche
function setupTenantSearch() {
  document.getElementById('tenant-search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTenants = tenants.filter(tenant =>
      tenant.name.toLowerCase().includes(searchTerm) ||
      tenant.property.toLowerCase().includes(searchTerm)
    );
    displayTenants(filteredTenants);
  });
}

// Fonction de filtrage par statut
function setupTenantFilter() {
  document.getElementById('tenant-status-filter').addEventListener('change', function (e) {
    const filterStatus = e.target.value;
    const filteredTenants = filterStatus
      ? tenants.filter(tenant => tenant.status === filterStatus)
      : tenants;
    displayTenants(filteredTenants);
  })
}

// Fonction de tri
function setupTenantSort() {
  document.getElementById('tenant-sort').addEventListener('change', function (e) {
    const sortBy = e.target.value;
    const sortedTenants = [...tenants].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'property') return a.property.localeCompare(b.property);
      if (sortBy === 'rentDueDate') return new Date(a.rentDueDate) - new Date(b.rentDueDate);
    })
    displayTenants(sortedTenants);
  })
}

export function initializeTenants() {
  displayTenants(tenants);
  setupTenantSearch();
  setupTenantFilter();
  setupTenantSort();
}