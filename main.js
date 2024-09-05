import { setupMobileMenu, setupPdfExport, setupTabNavigation } from './common.js';
import { initializeDashboard } from './dashboard.js';
import { initializeFinances, onFinancesTabShown } from './finances.js';
import { initializeTenants } from './locataires.js';
import { initializeProperties } from './properties.js';

document.addEventListener('DOMContentLoaded', () => {
  setupTabNavigation()
  setupMobileMenu()
  setupPdfExport()
  initializeDashboard()
  initializeProperties()
  initializeTenants()
  initializeFinances()
})