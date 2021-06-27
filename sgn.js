function inscrire() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    window.location = "index.html";
}
function quitter() {
    window.location = "index.html";
}