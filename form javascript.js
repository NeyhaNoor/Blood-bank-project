<script>
function register() {
  // Get input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Validate password match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Simulate server-side registration (replace with actual server-side logic)
  alert("Registration successful!\nName: " + name + "\nEmail: " + email);
}
</script>