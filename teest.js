var lives = 3, res,pr,resul;
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "123" && password == "123") {
        window.location = "qcm.html";
    } 
    else {
        lives --;
        alert("wrong password, You have " + lives + " lives left");
    }
    if (lives == 0) {
        alert("no more lives for you")
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("test").disabled = true;
    }
}

function resultat(){
    res = 0;
    if (document.getElementById("1").checked) {
        res = res + 10;
    }
    if (document.getElementById("5").checked) {
        res = res + 10;
    }
    if (document.getElementById("8").checked) {
        res = res + 10;
    }
    if (document.getElementById("9").checked) {
        res = res + 10;
    }
    if (document.getElementById("14").checked) {
        res = res + 10;
    }
    if (res >= 30) {
        resul = "Admis";
    } else {
        resul = "Non-Admis";
    }
    pr = (res / 50) * 100
    alert("Votre score finale : "+res+"\n"+
          "Pourcentage des reponses juste : "+pr+"%"+"\n"+
          "Resultat finale : "+resul
    );
}

const validatebtn = document.getElementById("validate");
const rightan = document.querySelectorAll('.right');
validatebtn.addEventListener('click', function(){
    for(i = 0 ; i < 5 ; i++) {
        rightan[i].classList.add('juste')
    }
})
function inscrire() {
    const ndc = document.getElementById("username1");
    const mdp = document.getElementById("password1");
    console.log(ndc, mdp);
}
