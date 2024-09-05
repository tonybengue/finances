class TenantRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set tenant(data) {
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles spécifiques au composant */
      </style>
      <tr>
        <td>${data.name}</td>
        <td>${data.property}</td>
        <td>${data.rent} €</td>
        <td>${formatDate(data.rentDueDate)}</td>
        <td>
          <span class="${getStatusColor(data.status)}">${data.status}</span>
        </td>
        <td>
          <button>Détails</button>
          <button>Contacter</button>
        </td>
      </tr>
    `;
  }
}

customElements.define('tenant-row', TenantRow);

// Utilisation
const tenantRow = document.createElement('tenant-row');
tenantRow.tenant = tenantData;
tenantsList.appendChild(tenantRow);