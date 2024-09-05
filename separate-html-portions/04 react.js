import React from 'react';

const TenantRow = ({ tenant }) => (
  <tr>
    <td>{tenant.name}</td>
    <td>{tenant.property}</td>
    <td>{tenant.rent} €</td>
    <td>{formatDate(tenant.rentDueDate)}</td>
    <td>
      <span className={getStatusColor(tenant.status)}>{tenant.status}</span>
    </td>
    <td>
      <button>Détails</button>
      <button>Contacter</button>
    </td>
  </tr>
);

// Utilisation
const TenantList = ({ tenants }) => (
  <table>
    <tbody>
      {tenants.map(tenant => <TenantRow key={tenant.id} tenant={tenant} />)}
    </tbody>
  </table>
);