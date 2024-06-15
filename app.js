const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".ul_links_and_button");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
