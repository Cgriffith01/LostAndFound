function Lost(name, phone, description) {
  this.name = name;
  this.phone = phone;
  this.description = description;
}

document.getElementById("submit").addEventListener("click", function () {
  const fullName = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const description = document.getElementById("description").value.trim();

  console.log("Name:", fullName);
  console.log("Phone:", phone);
  console.log("Description:", description);

  if (!fullName || !phone || !description) {
    alert("Please fill out all of the fields.");
    return;
  }

  const lostItem = new Lost(fullName, phone, description);
  const firstName = fullName.split(" ")[0];

  document.getElementById(
    "response"
  ).innerHTML = `${firstName}, someone will call you within 1 business day.`;

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("description").value = "";
});
