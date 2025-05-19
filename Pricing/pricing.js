document.querySelector("form").addEventListener("submit", proceed);
    function proceed(){
        event.preventDefault();
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var street = document.getElementById("street").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city_town").value;
        var postalcode = document.getElementById("postalcode").value;
        console.log("hii")
        if(fname.length && lname.length && street.length && address.length 
            && address.length && city.length && postalcode.length !=0)
        {
            window.location.href="paymentGateway.html"
            return true;
        }
        else{
            alert("Please check and fill the required detail");
        }
}
