function checkCredentials() {
  for (x in localStorage) {
    user = localStorage.getItem(x);
    if (x.username === document.getElementById("username_signup").value) {
      if (x.password === document.getElementById("password_signup").value) {
        return true;
      }
    }
  }
  return false;
}

function addCredentials() {
  const user = {
    username: document.getElementById("username_signup").value,
    password: document.getElementById("password_signup").value,
  };

  localStorage.setItem(
    document.getElementById("username_signup").value,
    JSON.stringify(user)
  );
}

function signUp() {
  if (!checkCredentials()) {
    addCredentials();
    window.location.replace("../buyer_dashboard/buyer.html");
  } else {
    alert("Username or Password already taken!");
  }
}
