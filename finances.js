import { Chart, registerables } from 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.esm.js';
Chart.register(...registerables);

let revenueExpenseChart = null
let expenseBreakdownChart = null

// Données financières
const financialData = {
  revenueExpense: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Revenus',
        data: [65000, 59000, 80000, 81000, 56000, 68500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Dépenses',
        data: [15000, 12000, 18000, 14000, 11000, 12300],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  expenseBreakdown: {
    labels: ['Entretien', 'Impôts', 'Assurances', 'Gestion', 'Divers'],
    datasets: [{
      data: [5000, 3000, 2000, 1500, 800],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ]
    }]
  },
  transactions: [
    { date: '2023-06-01', description: 'Loyer - Appartement 1', amount: 1500, type: 'Revenu' },
    { date: '2023-06-02', description: 'Réparation plomberie', amount: -350, type: 'Dépense' },
    { date: '2023-06-03', description: 'Loyer - Maison 2', amount: 2000, type: 'Revenu' },
    { date: '2023-06-05', description: 'Assurance bâtiment', amount: -800, type: 'Dépense' },
    { date: '2023-06-07', description: 'Loyer - Bureau 1', amount: 3500, type: 'Revenu' },
    { date: '2023-06-10', description: 'Entretien jardin', amount: -200, type: 'Dépense' },
    { date: '2023-06-12', description: 'Loyer - Appartement 3', amount: 1200, type: 'Revenu' },
    { date: '2023-06-15', description: 'Taxes foncières', amount: -1500, type: 'Dépense' },
    { date: '2023-06-18', description: 'Loyer - Local commercial', amount: 2800, type: 'Revenu' },
    { date: '2023-06-20', description: 'Rénovation salle de bain', amount: -2500, type: 'Dépense' }
  ]
};

function initializeFinancesCharts() {
  console.log("Initializing finance charts...");

  const revenueExpenseCtx = document.getElementById('revenueExpenseChart');
  const expenseBreakdownCtx = document.getElementById('expenseBreakdownChart');

  if (!revenueExpenseCtx || !expenseBreakdownCtx) {
    console.error("Canvas elements not found!");
    return;
  }

    // Détruisez les graphiques existants s'ils existent
    if (revenueExpenseChart) {
      revenueExpenseChart.destroy();
  }
  if (expenseBreakdownChart) {
      expenseBreakdownChart.destroy();
  }


  console.log("Revenue vs Expense Data:", financialData.revenueExpense);
  console.log("Expense Breakdown Data:", financialData.expenseBreakdown);

 // Créez de nouveaux graphiques et gardez une référence
 revenueExpenseChart = new Chart(revenueExpenseCtx, {
  type: 'bar',
  data: financialData.revenueExpense,
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

expenseBreakdownChart = new Chart(expenseBreakdownCtx, {
  type: 'doughnut',
  data: financialData.expenseBreakdown,
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'right',
          }
      }
  }
});


  console.log("Charts initialized successfully.");
}

// function displayTransactions(transactions) {
//   console.log("Displaying transactions...");
//   const transactionsList = document.getElementById('transactions-list');
//   if (!transactionsList) {
//     console.error("Transactions list element not found!");
//     return;
//   }
//   transactionsList.innerHTML = '';
//   transactions.forEach(transaction => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//             <td class="px-6 py-4 whitespace-nowrap">${formatDate(transaction.date)}</td>
//             <td class="px-6 py-4 whitespace-nowrap">${transaction.description}</td>
//             <td class="px-6 py-4 whitespace-nowrap ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}">
//                 ${transaction.amount > 0 ? '+' : ''}${transaction.amount} €
//             </td>
//             <td class="px-6 py-4 whitespace-nowrap">
//                 <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.type === 'Revenu' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//       }">
//                     ${transaction.type}
//                 </span>
//             </td>
//         `;
//     transactionsList.appendChild(row);
//   });
//   console.log("Transactions displayed successfully.");
// }

function displayTransactions(transactions) {
  console.log("Displaying transactions...");
  const transactionsList = document.getElementById('transactions-list');
  if (!transactionsList) {
      console.error("Transactions list element not found!");
      return;
  }
  transactionsList.innerHTML = '';
  transactions.forEach(transaction => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap">${formatDate(transaction.date)}</td>
          <td class="px-6 py-4 whitespace-nowrap">${transaction.description}</td>
          <td class="px-6 py-4 whitespace-nowrap ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}">
              ${transaction.amount > 0 ? '+' : ''}${transaction.amount.toLocaleString('fr-FR')} €
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  transaction.type === 'Revenu' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }">
                  ${transaction.type}
              </span>
          </td>
      `;
      transactionsList.appendChild(row);
  });
  console.log("Transactions displayed successfully.");
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Fonction d'initialisation principale
function initializeFinances() {
  console.log("Initializing finances section...");
  initializeFinancesCharts();
  displayTransactions(financialData.transactions);
  console.log("Finances section initialized.");
}

let financesInitialized = false

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
  if (!financesInitialized) {
    initializeFinances();
    financesInitialized = true;
}
});

// Si vous utilisez un système d'onglets, vous pouvez réinitialiser les graphiques lorsque l'onglet Finances est affiché
function onFinancesTabShown() {
  initializeFinancesCharts();
}

// Exportez ces fonctions si vous utilisez des modules
export { initializeFinances, onFinancesTabShown };

