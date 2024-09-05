fetch('tenantRowTemplate.html')
  .then(response => response.text())
  .then(template => {
    // Utiliser le template
    function createTenantRow(tenant) {
      const div = document.createElement('div');
      div.innerHTML = template;
      // Remplir les données dans le template
      // ...
      return div.firstElementChild;
    }
  });