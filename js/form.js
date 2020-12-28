const password = document.getElementById('password');
const email = document.getElementById('email');



password.addEventListener('input', passwordCheck);
email.addEventListener('input', emailCheck);


function passwordCheck(e) {
    let passValue = e.target.value;
    let message = document.getElementById('password-message');

    if (passValue.length < 8) {
        message.innerText = 'You should write minimum 8 characters';
        message.style.color = 'red';
        return null;
    }

    if (passValue === passValue.toLowerCase()) {
        message.innerText = 'You should include at least one upper case letter';
        message.style.color = 'red';
        return null;
    }

    if (passValue === passValue.toUpperCase()) {
        message.innerText = 'You should include at least one lower case letter';
        message.style.color = 'red';
        return null;
    }

    message.innerText = 'Great password';
    message.style.color = 'LimeGreen';
}

function emailCheck(e) {
    let emailValue = e.target.value;
    let regExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let message = document.getElementById('email-message');

    if (!regExp.test(emailValue)) {
        message.innerText = 'Please enter valid E-mail';
        message.style.color = 'red';
    } else {
        message.innerText = 'Correct E-mail';
        message.style.color = 'limeGreen';
    }
}
submit.onclick = function() {
    alert('Thank you for submitting');
  };
document.getElementById("submit").onmouseover = function() {mouseOver()};
document.getElementById("submit").onmouseout = function() {mouseOut()};
  function mouseOver() {
    document.getElementById("submit").style.color = "white";
  }
  
  function mouseOut() {
    document.getElementById("submit").style.color = "black";
  }
  