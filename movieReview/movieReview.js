
import navbar from "../navbar and footer(home page)/component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


document.getElementById("moreBtn").addEventListener("click", openPopUp);
function openPopUp(){
    document.getElementById("popUp").style.display = "flex";
}
function closeBtn() {
    document.getElementById("popUp").style.display = "none";
}


getdata()

  async function getdata(){
    try{
        let name=localStorage.getItem("name")
let id=localStorage.getItem("id")
      const res=await fetch(`https://apple-tv-api.glitch.me/${name}/${id}`);
      const data=await res.json();
     
    //   displaymostpopularnow(data)
   if(data.name=="Luck"){
    document.getElementById("videoOfTheMovie").src=data.videolink
    document.getElementById("movieNameContainer").innerHTML=`  <div class="movieName">
    <img src="https://is2-ssl.mzstatic.com/image/thumb/nhoexFUgkNwuPvkLk-QpQg/1200x450.webp" class="img-fluid"
        alt="Movie Name" id="movieNameImage">
</div>`

   }else{

   

       changedata(data);
   }
    
            
    }catch(err){
      console.log(err);
  }
}


function changedata(data){
    console.log(data);
    document.getElementById("movieNameContainer").innerHTML=`  <div class="movieName">
    <h1>${data.name}</h1>
</div>`
    document.getElementById("movieImageBeforeResponsive").src=data.poster
    document.getElementById("mobileViewImage").src=data.poster
    document.getElementById("videoOfTheMovie").src=data.videolink
    document.getElementById("trailerImages").src=data.image
    document.getElementById("trailerImages1").src=data.image
}