// Login fake (pra aprendizado)
const USERS = [
  { username: "admin", password: "1234" },
  { username: "rato", password: "cheese" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const user = USERS.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "chat.html";
  } else {
    error.style.display = "block";
  }
}
