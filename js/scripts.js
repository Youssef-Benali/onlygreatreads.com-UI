// Books Being Discussed images generated
window.onload = () => {
  let imgLinks = [
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677815321l/28389714._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660694120l/61953559._SX50_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651622856l/60657589._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1693156633l/140316113._SX50_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1469725638l/31284758._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541619661l/42658987._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682386381l/123416743._SX50_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1625341313l/6566798._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1693774318l/198218463._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465062557l/26879178._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1670344990l/64360031._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488558872l/34455798._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473958109l/32055177._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630283405l/57293966._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1674642451l/60759266._SX50_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589358965l/24390080._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496685444l/34042261._SX50_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645643546l/60482718._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1687528763l/63008072._SY75_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680124372l/123115331._SX50_.jpg",
  ];
  function mapBooks() {
    let elementContainer = document.querySelector(".books__discussed");
    let followersContainer = document.querySelector(".followers--block");

    imgLinks.map((link) => {
      elementContainer.innerHTML += `<img src=${link} alt="Book Image"/>`;
    });
    imgLinks.map((link) => {
      followersContainer.innerHTML += `<img src=${link} alt="Book Image"/>`;
    });
  }

  mapBooks();
};

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


