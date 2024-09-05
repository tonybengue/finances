import { onFinancesTabShown } from './finances.js';

// Gestion des onglets
export function setupTabNavigation() {
  document.querySelectorAll('[data-tab]').forEach(tab => {
      tab.addEventListener('click', function(e) {
          e.preventDefault();
          const tabId = this.getAttribute('data-tab');
          
          // Cachez tous les contenus d'onglets
          document.querySelectorAll('.tab-content').forEach(content => {
              content.classList.add('hidden');
          });
          
          // Affichez le contenu de l'onglet sélectionné
          const selectedTab = document.getElementById(tabId);
          selectedTab.classList.remove('hidden');
          
          // Si c'est l'onglet Finances, réinitialisez les graphiques
          if (tabId === 'finances') {
              onFinancesTabShown();
          }
          
          // Mise à jour de l'apparence des onglets
          document.querySelectorAll('[data-tab]').forEach(t => {
              t.classList.remove('bg-gray-700');
          });
          this.classList.add('bg-gray-700');
      });
  });
}

// Toggle du menu latéral sur mobile
export function setupMobileMenu() {
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('hidden')
  })
}

export function setupPdfExport() {
  // Export PDF
  document.getElementById('exportPdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const element = document.querySelector('.tab-content:not(.hidden)');
    const title = document.getElementById('page-title').textContent;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      doc.setFontSize(16);
      doc.text(title, 105, 15, null, null, 'center');
      doc.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight);

      doc.save(`rapport-${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    });
  });

  // Initialisation
  document.querySelector('[data-tab="dashboard"]').click();
}