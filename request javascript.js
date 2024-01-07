<script>
function addDonor() {
  // Get input values
  var donor = document.getElementById("donor").value;
  var amount = document.getElementById("amount").value;

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  // Prepare data to send to the server
  var data = {
    donor: donor,
    amount: amount
  };

  // Make a POST request to the server (replace 'your-api-endpoint' with the actual endpoint)
  fetch('your-api-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    // Handle the server response
    console.log(result);

    // Add the donor record to the UI
    var donationList = document.getElementById("donation-list");
    var listItem = document.createElement("li");
    listItem.textContent = "Donor: " + donor + " - Amount: $" + amount;
    donationList.appendChild(listItem);

    // Clear input fields
    document.getElementById("donor").value = "";
    document.getElementById("amount").value = "";
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
    alert('Failed to add donor. Please try again.');
  });
}
</script>