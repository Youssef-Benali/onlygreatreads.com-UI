// Basic Routing
// js/main.js
const routes = {
  "/": "components/home.html",
  "/loginForm": "components/loginForm.html",
  "/registerForm": "components/registerForm.html",
  "/myBooks": "components/bookPage.html",
  "/bookDetails": "components/bookDetails.html",
  
};

const rootDiv = document.getElementById("content");

const loadContent = async (path) => {
  const response = await fetch(routes[path]);
  const content = await response.text();
  rootDiv.innerHTML = content;
};

const router = () => {
  const path = window.location.hash.slice(1) || "/";
  loadContent(path);
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
