function toggleNavigationBar() {
  let navbarMobileContainer = document.querySelector(
    ".navbar__mobile--container"
  );

  navbarMobileContainer.style.display =
    navbarMobileContainer.style.display === "" ? "block" : "";
}

function closeMobileMenu() {
  document.querySelector(".navbar__mobile--container").style.display = "";
}
