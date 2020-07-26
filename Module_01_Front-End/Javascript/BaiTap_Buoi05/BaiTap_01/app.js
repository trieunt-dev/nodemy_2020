var btnElement = document.getElementById("btn-change");
var btnWhiteElement = document.getElementById("btn-change-white");
var imgElement = document.getElementById("logo");

btnElement.addEventListener("click", () => {
    imgElement.setAttribute("src", "./images/logo-green.svg");
});

btnWhiteElement.addEventListener("click", () => {
    imgElement.setAttribute("src", "./images/logo-white.svg");
});
