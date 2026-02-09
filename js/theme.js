(function () {
  // Theme initialization
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Theme toggle
  window.toggleTheme = function() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";

    if (isDark) {
      html.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Mobile menu
  window.toggleMenu = function() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("menuOverlay");

    if (menu && overlay) {
      menu.classList.toggle("show");
      overlay.classList.toggle("show");
    }
  };

  window.closeMenu = function() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("menuOverlay");

    if (menu && overlay) {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    }
  };

  // Keyboard support
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Debounced live search
  let searchTimeout;
  window.liveSearch = function(value) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      // Implement search logic here, e.g., filter communities
      console.log("Searching for:", value);
    }, 300);
  };

})();
