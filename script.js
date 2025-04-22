const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // On page load, check if credentials exist in localStorage
    window.onload = () => {
      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      if (savedUser && savedPass) {
        existingBtn.style.display = "inline-block";
      }
    };

    // Form submit behavior
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const remember = checkbox.checked;

      alert(`Logged in as ${username}`);

      if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "inline-block";
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }

      // Optional: Clear form inputs after login
      form.reset();
    });

    // Existing user button behavior
    existingBtn.addEventListener("click", () => {
      const savedUser = localStorage.getItem("username");
      if (savedUser) {
        alert(`Logged in as ${savedUser}`);
      }
    });
