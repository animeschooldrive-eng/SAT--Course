// Handles switching active content sections, updating sidebar highlights, and saving state
function switchPage(pageId, saveState = true) {
  // Hide all content sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => sec.classList.remove('active'));
  
  // Show target section
  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Remove active class from all sidebar buttons
  const sidebarButtons = document.querySelectorAll('.sidebar-menu button');
  sidebarButtons.forEach(btn => btn.classList.remove('active'));

  // Highlight corresponding sidebar button if it exists
  const targetBtn = document.getElementById('btn-' + pageId);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  // Save the current page to localStorage so it persists on refresh
  if (saveState) {
    localStorage.setItem('activeSatMathPage', pageId);
  }

  // Scroll smoothly back to top of the page content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggles the Geometry & Trigonometry dropdown menu in the sidebar
function toggleGeometryMenu() {
  const menu = document.getElementById('geometry-submenu');
  if (menu) {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }
}

// Toggles the Triangles nested dropdown menu in the sidebar
function toggleTrianglesMenu() {
  const menu = document.getElementById('triangles-submenu');
  if (menu) {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }
}

// Automatically load the last viewed page when the page is refreshed/opened
window.addEventListener('DOMContentLoaded', () => {
  const savedPage = localStorage.getItem('activeSatMathPage');
  if (savedPage && document.getElementById(savedPage)) {
    switchPage(savedPage, false);
  }
});
