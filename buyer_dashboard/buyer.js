document.getElementById("profile_icon").addEventListener("click", (e) => {
  document.getElementById("profile_options_menu").style.display = "grid";
  document.getElementById("profile_icon").style.opacity = "75%";
});

document.getElementById("header").addEventListener("mouseover", (e) => {
  document.getElementById("profile_options_menu").style.display = "none";
  document.getElementById("profile_icon").style.opacity = "100%";
});

document.getElementById("product_grid").addEventListener("mouseover", (e) => {
  document.getElementById("profile_options_menu").style.display = "none";
  document.getElementById("profile_icon").style.opacity = "100%";
});
