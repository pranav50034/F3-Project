const links = document.querySelectorAll(".nav-items a");
const login = document.getElementById("login-btn");
const signup = document.getElementById("signup-btn");

let accessToken = localStorage.getItem("accessToken");

if (!accessToken) {
   links[3].href = "/signup";
   links[4].href = "/signup";
} else {
   location.replace("/shop");
}

login.addEventListener("click", () => {
   location.replace("./login/index.html");
});

signup.addEventListener("click", () => {
   location.replace("./signup/index.html");
});
