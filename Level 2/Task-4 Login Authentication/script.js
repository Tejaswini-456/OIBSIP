const authForm = document.getElementById("auth-form");
const authTitle = document.getElementById("auth-title");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

let isLoginMode = true; // Toggle between login and register

// Event listener for form submission
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  if (isLoginMode) {
    loginUser(username, password);
  } else {
    registerUser(username, password);
  }
});

// Toggle between login and registration
toggleLink.addEventListener("click", () => {
  isLoginMode = !isLoginMode;
  authTitle.textContent = isLoginMode ? "Login" : "Register";
  toggleLink.textContent = isLoginMode
    ? "Don't have an account? Register here."
    : "Already have an account? Login here.";
  errorMessage.textContent = "";
  usernameInput.value = "";
  passwordInput.value = "";
});

// Register a new user
function registerUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username]) {
    errorMessage.textContent = "Username is already taken.";
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please log in.");
  isLoginMode = true;
  toggleLink.click(); // Switch to login mode
}

// Login a user
function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username] === password) {
    localStorage.setItem("currentUser", username);

    // Display login success message
    errorMessage.style.color = "green";
    errorMessage.textContent = "Logged in successfully!";
    
    // Redirect to secured page after a short delay
    setTimeout(() => {
      window.location.href = "secured.html";
    }, 2000);
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Invalid username or password.";
  }
}
