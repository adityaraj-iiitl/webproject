let isLoggedIn = false;

window.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("user-icon");
  const authButton = document.getElementById("auth-button");

  if (!isLoggedIn) {
    userIcon.classList.add("hidden"); 
    authButton.textContent = "Login";
  } else {
    userIcon.classList.remove("hidden");
    authButton.textContent = "Logout";
  }
});


function toggleAuthButton() {
  const authButton = document.getElementById("auth-button");
  const userIcon = document.getElementById("user-icon");

  if (isLoggedIn) {
    authButton.textContent = "Login";
    userIcon.classList.add("hidden"); 
    isLoggedIn = false;

    console.log("User logged out. Button now shows 'Login'.");

  } else {
    authButton.textContent = "Logout";
    userIcon.classList.remove("hidden"); 
    isLoggedIn = true;

    console.log("User logged in. Button now shows 'Logout'.");

   
  }
}
document.getElementById("auth-button").addEventListener("click", toggleAuthButton);
