 let isLoggedIn = false; 

    function showSection(sectionId) {
      if (!isLoggedIn && sectionId !== "login") {
        alert("Please login first!");
        return;
      }
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if(user === "admin" && pass === "1234") {
    document.getElementById("loginMessage").innerText = "Login Successful!";
  } else {
    document.getElementById("loginMessage").innerText = "Invalid Credentials!";
  }
}

function uploadCertificate() {
  let fileInput = document.getElementById("certificateUpload");
  let file = fileInput.files[0];
  if(file) {
    let list = document.getElementById("certificateList");
    let newItem = document.createElement("li");
    newItem.textContent = file.name;
    list.appendChild(newItem);
    alert("Certificate uploaded: " + file.name);
  } else {
    alert("Please select a file to upload.");
  }
}
