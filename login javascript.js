<script>
    function login() {
      // Get input values
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Simulate server-side authentication (replace with actual server-side logic)
      if (username === "user" && password === "password") {
        alert("Login successful!");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  </script>