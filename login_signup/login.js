function checkCredentials() {
  for (x in localStorage) {
    user = JSON.parse(localStorage.getItem(x));
    if (user.username === document.getElementById("username_login").value) {
      if (user.password === document.getElementById("password_login").value) {
        return true;
      }
    }
  }
  return false;
}

function changeColors() {
  document.getElementById("username_login").style.borderColor = "red";
  document.getElementById("password_login").style.borderColor = "red";
  alert("Incorrect Username or Password!");
}

function login() {
  if (checkCredentials()) {
    window.location.replace("../buyer_dashboard/buyer.html");
  } else {
    changeColors();
  }
}
