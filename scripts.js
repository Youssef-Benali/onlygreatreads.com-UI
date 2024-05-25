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
  let navbarLoginMobile = document.querySelector(".navbar__login--mobile");
  let navbarMenuConnected = document.querySelector(
    ".navbar__mobile--connected"
  );

  navbarMenuConnected.style.display = "none";
  navbarLoginMobile.style.display = "flex";

  let navbarLoginLinks = document.querySelector(".navbar__login");
  let navbarConnectedOptions = document.querySelector(".navbar__rightgroup");
  navbarLoginLinks.style.display = "flex";
  navbarConnectedOptions.style.display = "none";
}

function logIn() {
  let navbarLoginMobile = document.querySelector(".navbar__login--mobile");
  let navbarMenuConnected = document.querySelector(
    ".navbar__mobile--connected"
  );

  navbarMenuConnected.style.display = "block";
  navbarLoginMobile.style.display = "none";

  let navbarLoginLinks = document.querySelector(".navbar__login");
  let navbarConnectedOptions = document.querySelector(".navbar__rightgroup");
  navbarLoginLinks.style.display = "none";
  navbarConnectedOptions.style.display = "flex";
}

// Dropdown menu interaction
function toggleDropDownMenu() {
  let dropDownMenu = document.querySelector(".dropdown_menu");

  dropDownMenu.style.display = dropDownMenu.style.display === "" ? "block" : "";
}

// Forms logic
function toggleFormOptions(option) {
  let register = document.querySelector(".register--option");
  let login = document.querySelector(".login--option");
  let loginTitles = document.querySelector(".login__options");

  let loginTitle = loginTitles.querySelector("h4");
  let logoutTitle = loginTitles.querySelector("h4:nth-child(2)");

  if (option == "login") {
    loginTitle.classList.add("active--option");
    logoutTitle.classList.remove("active--option");
    register.style.display = "none";
    login.style.display = "inherit";
    login.style.justifyContent = "inherit";
    login.style.flexDirection = "inherit";
  } else {
    logoutTitle.classList.add("active--option");
    loginTitle.classList.remove("active--option");
    login.style.display = "none";
    register.style.display = "inherit";
    register.style.justifyContent = "inherit";
    register.style.flexDirection = "inherit";
  }
}

// Show more text author__bio

function showMoreText() {
  let btn = document.querySelector(".author__bio--btn");
  let textClass = document.querySelector(".bio--block");

  if (textClass.classList.contains("bio--invisible")) {
    btn.innerText = "Show less...";
    textClass.classList.remove("bio--invisible");
  } else {
    textClass.classList.add("bio--invisible");
    btn.innerText = "Show more...";
  }
}

// Choose the size of the progress bar

function updateProgressBars(ratings) {
  const totalRatings = ratings.reduce((a, b) => a + b, 0);

  ratings.forEach((rating, index) => {
    const percentage = (rating / totalRatings) * 100;
    const progressBar = document.getElementById(`progress-bar-${5 - index}`);
    progressBar.style.width = percentage + "%";
  });
}

// Example set of ratings: [number of 5-star reviews, number of 4-star reviews, number of 3-star reviews, number of 2-star reviews, number of 1-star reviews]
const ratings = [50, 30, 10, 5, 5];
updateProgressBars(ratings);
