

function loginSave() {
  console.log("Login successful");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var email1=localStorage.getItem("email1")
  var password1=localStorage.getItem("password1")

  if(email === email1 && password === password1) {
    window.location.href = "dashboard.html";
}else{
  alert('please Enter Valid Email & Password!');
  
}

  // var users = JSON.parse(localStorage.getItem("users")) || [];


  // var matchedUser = users.find(function(user) {
  //   return user.email === enteredemail && user.password === enteredpassword;
  // });

  // if (matchedUser) {
 
  //   console.log("Login successful");
  // } else {

  //   console.log("Invalid username or password");
  // }
  
    
    document.getElementById('loginForm').reset();
}


function login(event) {
  event.preventDefault();
  
    
    const email = document.getElementById('email').value;
    var errorElement2 = document.getElementById("usernameError2");
    const password = document.getElementById('password').value;
    var errorElement3 = document.getElementById("usernameError3");
  
    
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
    
    
    loginSave();
  }

  // var loginForm = document.getElementById("loginForm");
  // loginForm.addEventListener("submit", function(event) {
    
  //   login();
  // });


//   function goForSignup() {
//     window.location.href = "signup.html";
//   }
  