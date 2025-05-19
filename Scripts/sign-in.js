var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

var inputID = document.querySelector("#inpID");
var person = undefined;
var appleID = document.querySelector("#submit");
appleID.addEventListener("click", function () {
  var flag = false;
  localStorage.setItem("person", person);
  for (var i = 0; i < signInData.length; i++) {
    console.log("working");
    if (signInData[i].email == inputID.value) {
      person = signInData[i].fname + " " + signInData[i].lname;
      // localStorage.setItem("isLogined", true);
      // alert("Logged In Succesfully !");
      
      window.location.href = "login-pass.html";
      // window.location.href = "login-pass.html";
      flag = true;
      break;
    }
  }
  if (flag == false) {
    alert("Enter a valid Apple ID");
  }

});
if(flag == true){
  closeModal();
    advert.style.display = "none";
    jumboBtn.style.display = "none";
    jumboInfo.forEach(function (el) {
      el.style.display = "none";
    });
    signBtn.classList.remove("class", "sign-in_btn");
    signBtn.setAttribute("id", "sign-out_btn");
    signBtnText.innerHTML =
      '<i class="fa-solid fa-user fa-sm"></i>&nbsp&nbsp' + person;
    
    
};