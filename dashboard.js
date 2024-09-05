// Graphiques

// Ajout des graphiques
export function initializeDashboard() {
  // Graphique des revenus mensuels
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
      datasets: [{
        label: 'Revenus (€)',
        data: [62000, 59000, 65000, 61000, 68000, 70000, 72000, 68000, 66000, 69000, 68500, 68500],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Graphique des types de propriétés
  const propertyTypeCtx = document.getElementById('propertyTypeChart').getContext('2d');
  new Chart(propertyTypeCtx, {
    type: 'doughnut',
    data: {
      labels: ['Appartements', 'Maisons', 'Bureaux', 'Commerces'],
      datasets: [{
        data: [12, 5, 4, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        }
      }
    }
  });

  // Graphique du taux d'occupation
  const occupancyRateCtx = document.getElementById('occupancyRateChart').getContext('2d');
  new Chart(occupancyRateCtx, {
    type: 'bar',
    data: {
      labels: ['Prop 1', 'Prop 2', 'Prop 3', 'Prop 4', 'Prop 5', 'Prop 6', 'Prop 7', 'Prop 8'],
      datasets: [{
        label: 'Taux d\'occupation (%)',
        data: [100, 95, 98, 92, 97, 94, 96, 93],
        backgroundColor: 'rgba(153, 102, 255, 0.8)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}