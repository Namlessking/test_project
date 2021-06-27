var lives = 3, res,pr,resul,pp = 0;
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == window.localStorage.getItem('username') && password == window.localStorage.getItem('password')) {
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
    pp++;
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
function signup() {
    window.location = "signup.html";
}
const validatebtn = document.getElementById("validate");
const rightan = document.querySelectorAll('.right');
validatebtn.addEventListener('click', function(){
    if (pp === 0) {
        alert("Think you're smart ??!")
    } else {
        for(i = 0 ; i < 5 ; i++) {
            rightan[i].classList.add('juste');
        }
    }
})

