
function signUpSave() {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  localStorage.setItem("email1",email)
  localStorage.setItem("password1",password)

  // var user = {
  //   email: email,
  //   password: password
  // };

  // var users = JSON.parse(localStorage.getItem("users")) || [];

  // users.push(user);

  // localStorage.setItem("users", JSON.stringify(users));
  alert('Signup successful!');


  window.location.href = "Login.html";
  document.getElementById('SignupForm').reset();


}


function Signup(event) {
    event.preventDefault();
   
  
    const name = document.getElementById('Name').value;
    var errorElement = document.getElementById("usernameError");
    const email = document.getElementById('email').value;
    var errorElement2 = document.getElementById("usernameError2");
    const password = document.getElementById('password').value;
    var errorElement3 = document.getElementById("usernameError3");
    const cpassword = document.getElementById('cpassword').value;
    var errorElement4 = document.getElementById("usernameError4");

    if (name === "") {
      errorElement.textContent = "*Please Enter Name";
      return false;
    } else {
      errorElement.textContent = "";
    }
  
    if (email.trim() === '' || !email.includes('@') || email.length < 9) {
      errorElement2.textContent = "*Enter Valid Email";
      return false;
    }else {
      errorElement2.textContent = "";
    }

    if( password.trim()===""){
      errorElement3.textContent = "*Enter Correct Password";
      return false;
    }else {
      errorElement3.textContent = "";
    }

    if(cpassword.trim()=== ""){
      errorElement4.textContent = "*Enter Correct Password";
      return false;
    }else{
      errorElement4.textContent = "";
      
    }
     signUpSave();
  }

  
