const validUsername = "admin";
const validPassword = "admin";

document.getElementById('loginForm').addEventListener('submit', verify);

function verify(event) {
    event.preventDefault(); 

    const username = document.getElementById('uname').value;
    const password = document.getElementById('pass').value;

    if (username === validUsername && password === validPassword) {
        window.location.href = "index1.html";
    } else {
        alert("Invalid username or password.");
    }
}