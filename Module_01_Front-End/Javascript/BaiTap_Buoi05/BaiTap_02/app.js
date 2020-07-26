var btnLogin = document.querySelector("button[type=submit]");



btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var message = document.querySelectorAll("p.form-message");
});
