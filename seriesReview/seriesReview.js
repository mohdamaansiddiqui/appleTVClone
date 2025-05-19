// setTimeout(() => {
//     document.getElementById("movieImageBeforeResponsive").style.display = "none";
//     document.getElementById("videoOfTheMovie").style.display = "block";
// }, 3000);

import navbar from "../navbar and footer(home page)/component/navbar.js";
// console.log(navbar)
document.getElementById("navbar").innerHTML = navbar();


document.getElementById("moreBtn").addEventListener("click", openPopUp);
document.getElementById("closeBtnForPopUp").addEventListener("click", closeBtn);
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
   if(data.name=="Foundation"){
    document.getElementById("videoOfTheMovie").src=data.videolink
    document.getElementById("movieNameContainer").innerHTML=`  <div class="movieName">
    <img src="https://is3-ssl.mzstatic.com/image/thumb/1yqG5QO2rHDxJ93yCiTmuQ/1200x450.webp" class="img-fluid"
        alt="Movie Name" id="movieNameImage">
</div>`

   }else{

   

       changedata(data);
   }
    
            
    }catch(err){
      console.log(err);
  }
}

const changedata =(data) => {
    console.log(data);
    document.getElementById("movieNameContainer").innerHTML=`  <div class="movieName">
    <h1>${data.name}</h1>
</div>`
    
    console.log(data.poster);
    document.getElementById("movieImageBeforeResponsive").src=data.poster
    document.getElementById("mobileViewImage").src=data.poster
    document.getElementById("videoOfTheMovie").src=data.videolink
    // document.getElementById("moviename").innerText=data.name
    
        document.getElementById("content").innerText=data.description
        document.getElementById("movieTitleName1").innerText=data.episode1.name
        document.getElementById("movieTitleName2").innerText=data.episode2.name
        document.getElementById("movieTitleName3").innerText=data.episode3.name
        document.getElementById("movieTitleName4").innerText=data.episode4.name
        document.getElementById("movieTitleName5").innerText=data.episode5.name
        document.getElementById("movieTitleName6").innerText=data.episode6.name
        document.getElementById("movieTitleName7").innerText=data.episode7.name
    
        document.getElementById("season1MovieImage").src=data.episode1.image
       
        document.getElementById("season2MovieImage").src=data.episode2.image
        document.getElementById("season3MovieImage").src=data.episode3.image
        document.getElementById("season4MovieImage").src=data.episode4.image
        document.getElementById("season5MovieImage").src=data.episode5.image
        document.getElementById("season6MovieImage").src=data.episode6.image
        document.getElementById("season7MovieImage").src=data.episode7.image
        document.getElementById("trailerImages1").src=data.episode7.image
        document.getElementById("trailerImages2").src=data.episode6.image
        document.getElementById("trailerImages3").src=data.episode5.image
        document.getElementById("trailerImages4").src=data.episode4.image
        document.getElementById("CrewImage1").src=data.cast1.image
        document.getElementById("CrewImage2").src=data.cast2.image
        document.getElementById("CrewImage3").src=data.cast3.image
        document.getElementById("CrewImage4").src=data.cast4.image
        document.getElementById("CrewImage5").src=data.cast5.image
        document.getElementById("CrewImage6").src=data.cast6.image
        document.getElementById("CrewImage7").src=data.cast7.image
        document.getElementById("CrewImage8").src=data.cast8.image
        document.getElementById("CrewImage9").src=data.cast9.image
    
    
}