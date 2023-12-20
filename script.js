const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName(){
  let name = document.getElementById('name');
  let nameValue = name.value;

  if(nameValue.length == 0)
  {
    name.style.border = '1px solid red';
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)){
    name.style.border = '1px solid red';
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
  name.style.border = '1px solid #24b124';
  name.style.backgroundColor = '#fff !important';
  return true;
}

function validatePhone(){
  let phone = document.getElementById('number');
  let phoneValue = phone.value;
  if(phoneValue.length == 0)
  {
    phone.style.border = '1px solid red';
    phoneError.innerHTML = 'Phone no is required';
    return false;
  }
  if(phoneValue.length !== 10)
  {
    phone.style.border = '1px solid red';
    phoneError.innerHTML = 'Phone no Should be 10 digits';
    return false;
  }
  if(!phoneValue.match(/^[0-9]{10}$/))
  {
    phone.style.border = '1px solid red';
    phoneError.innerHTML = 'Only digits please.';
    return false;
  }

  phoneError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
  phone.style.border = '1px solid #24b124';
  return true;
}

function validateEmail(){
  let email = document.getElementById('email');
  let emailValue = email.value;
  if(emailValue.length == 0)
  {
    email.style.border = '1px solid red';
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{1,3}$/))
  {
    email.style.border = '1px solid red';
    emailError.innerHTML = 'Email Invalid';
    return false;
  }
  emailError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
  email.style.border = '1px solid #24b124';
  return true;
}
function validateMessage(){
  let message = document.getElementById('textArea');
  let messageValue = message.value;
  let require = 30;
  let left = require - messageValue.length;
  if(left>0)
  {
    message.style.border = '1px solid red';
    messageError.innerHTML = `${left} more characters required`;
    return false;
  }
  messageError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
  message.style.border = '1px solid #24b124';
  return true;
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage())
  {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function(){
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}