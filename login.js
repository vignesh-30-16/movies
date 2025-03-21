let btn = document.getElementById("login-btn");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
  
    error();
    let users = JSON.parse(localStorage.getItem("user") || "[]");

    let user = users.find((user) => user.name === username && user.pass === password);

    if (user) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
      localStorage.setItem('userName',`${username}`);
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
} else {
  alert("No user found. Please register first.");
}

function error() {
  let uerrorname = document.getElementById("usernameerror");
  let uerrorpassword = document.getElementById("userpassword");

  let usernameinput = document.getElementById("username");
  let passwordinput = document.getElementById("password");

  let username = usernameinput.value.trim();
  let password = passwordinput.value.trim();
  if (username === "") {
    uerrorname.innerHTML = "Fill the blank space";
    uerrorname.style.color = "red";
    usernameinput.style.border = "3px solid red";

    setTimeout(() => {
      uerrorname.innerHTML = "";
      uerrorname.style.display = "none";
      usernameinput.style.border = " solid grey";
    }, 2000);
    return;
  } else {
    uerrorname.innerHTML = "perfect";
    uerrorname.style.color = "green";
    usernameinput.style.border = "3px solid green";

    setTimeout(() => {
      uerrorname.innerHTML = "";
      uerrorname.style.display = "none";
      usernameinput.style.border = " solid grey";
    }, 2000);
  }
  if (password === "") {
    uerrorpassword.innerHTML = "Password cannot be empty";
    uerrorpassword.style.color = "red";
    passwordinput.style.border = "3px solid red";
    setTimeout(() => {
      uerrorpassword.innerHTML = "";
      uerrorpassword.style.display = "none";
      passwordinput.style.border = " solid grey ";
    }, 2000);
    return;
  } else {
    uerrorpassword.innerHTML = "Prefect";
    uerrorpassword.style.color = "green";
    passwordinput.style.border = "red";
    setTimeout(() => {
      uerrorpassword.innerHTML = "";
      uerrorpassword.style.display = "none";
      passwordinput.style.border = "3px solid black";
    }, 2000);
  }
}
