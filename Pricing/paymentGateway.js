document.querySelector("form").addEventListener("submit", proceed);
    function proceed(){
        event.preventDefault();
        var name = document.getElementById("name").value;
        name.innertext=name;

        var cardNum = document.getElementById("num").value == "1234123412341234";
        var cvv = document.getElementById("cvv").value == "123";
        var date = document.getElementById("date").value == "12/1234"
        if(cardNum  && cvv && date) {
            alert("OTP has been sent to your ID, Please check.")
            window.location.href="otpPage.html"
            return true;
        }
        else{
            alert(" Wrong Credentials ");
        }
        
        var date = document.getElementById("date").value;  
}