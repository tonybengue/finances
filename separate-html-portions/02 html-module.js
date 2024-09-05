export const tenantRowTemplate = `
  <tr>
    <td class="px-6 py-4 whitespace-nowrap"></td>
    <td class="px-6 py-4 whitespace-nowrap"></td>
    <td class="px-6 py-4 whitespace-nowrap"></td>
    <td class="px-6 py-4 whitespace-nowrap"></td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"></span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <button class="text-indigo-600 hover:text-indigo-900 mr-2">Détails</button>
      <button class="text-red-600 hover:text-red-900">Contacter</button>
    </td>
  </tr>
`;

// Dans votre fichier JavaScript principal
import { tenantRowTemplate } from './tenantRowTemplate.js';

function createTenantRow(tenant) {
  const template = document.createElement('template');
  template.innerHTML = tenantRowTemplate;
  const row = template.content.cloneNode(true);
  // Remplir les données comme précédemment
  return row;
}