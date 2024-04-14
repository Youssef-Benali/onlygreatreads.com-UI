// NavBar UI close interaction for mobile menu
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

// Login UI interactions
function logOut() {
  let navbarLoginLinks = document.querySelector(".navbar__login");
  let navbarConnectedOptions = document.querySelector(".navbar__rightgroup");
  navbarLoginLinks.style.display = "flex";
  navbarConnectedOptions.style.display = "none";
}

function logIn() {
  let navbarLoginLinks = document.querySelector(".navbar__login");
  let navbarConnectedOptions = document.querySelector(".navbar__rightgroup");
  navbarLoginLinks.style.display = "none";
  navbarConnectedOptions.style.display = "flex";
}

// Dropdown menu interaction
function toggleDropDownMenu(){
  let dropDownMenu = document.querySelector(".dropdown_menu")

  dropDownMenu.style.display = dropDownMenu.style.display === "" ? "block" : ""
}
