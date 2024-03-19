var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if (pass.ariaValueMax.length > 0) {
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
})