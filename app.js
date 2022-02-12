const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signin = document.getElementById('signin')

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

$(document).ready(function () {
    $("#myinput").on("input", function () {
        // Print entered value in a div box
        $("#result").text($(this).val());
    });
});