<script>
function addDonationRecord() {
  // Get input values
  var donor = document.getElementById("donor").value;
  var amount = document.getElementById("amount").value;

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  // Create a new list item for the donation record
  var donationList = document.getElementById("donation-list");
  var listItem = document.createElement("li");
  listItem.className = "donation-item";
  listItem.textContent = "Donor: " + donor + " - Amount: $" + amount;

  // Append the new list item to the donation list
  donationList.appendChild(listItem);

  // Clear input fields
  document.getElementById("donor").value = "";
  document.getElementById("amount").value = "";
}
</script>