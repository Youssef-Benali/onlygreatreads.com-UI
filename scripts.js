// NavBar functions
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

// Login status
let isConnected = false;

function logIn() {
  let navbarLoginLinks = document.querySelector(".navbar__login");
  let navbarConnectedOptions = document.querySelector(".navbar__rightgroup");

  isConnected = !isConnected;

  if (isConnected) {
    navbarLoginLinks.style.display = "none";
    navbarConnectedOptions.style.display = "flex";
  } else {
    navbarLoginLinks.style.display = "flex";
    navbarConnectedOptions.style.display = "none";
  }

  // console.log(navbarLoginLinks);
  // console.log(navbarConnectedOptions);
}
