const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (userNameValue == '') {
    setErrorMessage(username, "UserName Can't be blank");
  } else {
    setSuccessfullMessage(username, "Successfull");
  }

  if (emailValue == '') {
    setErrorMessage(email, "UserName Can't be blank");
  } else {
    setSuccessfullMessage(email, "Successfull");
  }

  if(passwordValue==''){
      setErrorMessage(password,"Enter Right password");
  }else{
      setSuccessfullMessage(password,"Successfull")
  }

  if(password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
} else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
} else{
    setSuccessFor(password2);
}
 
}

function setErrorMessage(input, message) {
  const formControl = input.parentElement;
  const small = document.querySelector("small");

  small.innerText = message;
  formControl.className ='form-control error';
}

function setSuccessfullMessage(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
