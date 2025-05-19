var signInData = JSON.parse(localStorage.getItem("signInData")) || [];



function getData(){
  event.preventDefault();
  var data= {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
   
    
  };

var emailcheack=/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
  var passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if(passwordcheck.test(data.pass)){

    }else{
      alert("password must contain Special characters ")
      return;
    }
  if(emailcheack.test(data.email)){

    }else{
      alert("Invalid email address")
      return;
    }
  var flag = false;
  for(var i=0;i<signInData.length;i++){
    if(data.email === signInData[i].email){
      flag = true;
      break;
    }
  }
  if(flag == true){
    alert("User already exists !");
  }
  else{
    signInData.push(data);
    localStorage.setItem("signInData", JSON.stringify(signInData));
    window.location.href = "sign-in.html";
  }
}

