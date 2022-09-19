document.querySelector("body").style.backgroundColor = '#f3f3f3';
document.querySelector("#header-container").style.backgroundColor = '#41b16a';
document.querySelector(".no-emergency-tasks").style.backgroundColor = '#f9db5e';
document.querySelector(".emergency-tasks").style.backgroundColor = '#fc9e83';
document.querySelector("#footer-container").style.backgroundColor = '#073534';


const non_emergency_h3 = document.querySelectorAll(".no-emergency-tasks h3");
non_emergency_h3[0].style.backgroundColor = '#232525';
non_emergency_h3[1].style.backgroundColor = '#232525';


const emergency_h3 = document.querySelectorAll(".emergency-tasks h3");
emergency_h3[0].style.backgroundColor = '#ab7af3';
emergency_h3[1].style.backgroundColor = '#ab7af3';