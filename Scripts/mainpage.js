
 document.getElementById("mic").addEventListener("click",()=>{

  var recognition= new webkitSpeechRecognition();
  
  recognition.lang="en=GB";
  
  recognition.onresult=function(event){
  console.log(event.results[0][0].transcript)
  document.getElementById("search_input").value=event.results[0][0].transcript;
  data()
  
  }
  recognition.start();
  
  })
 
  









var signIn = document.querySelector("#signin");
var backdrop = document.querySelector(".backdrop");
var closebtn = document.querySelector(".close-modal_btn");
var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var advert = document.querySelector("#advertisement");
var jumboBtn = document.querySelector(".jumbotron-btn");
var iframe = document.querySelector("#modal-iframe");

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
  body.style.overflow = "hidden";
  iframe.src = "sign-in.html";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  body.style.overflow = "auto";
  iframe.src = "sign-in.html";
}
setInterval(function()


{
  var logged = localStorage.getItem("isLogined")
  
  if(localStorage.getItem("isLogined")=="true"){
    if (logged=="true") {
      document.getElementById("sign-in").innerText = "Log Out"
    }
}}, 1000);

// jumboBtn.addEventListener("click", function () {
//   openModal();
//   iframe.src = "sign-in.html";
// });

// advert.addEventListener("click", function () {
//   openModal();
//   iframe.src = "sign-in.html";
// });

signIn.addEventListener("click", function () {
  
 

 
 if(localStorage.getItem("isLogined")=="true"){
  
  console.log("Sign")
  document.getElementById("sign-in").innerText = "Sign In"
  localStorage.setItem("isLogined", "false");
  location.reload();
  alert("Logged Out Succesfully !");
  
 
 }else {
  console.log("afsaf")
  openModal();
  iframe.src = "./signupandlogin/sign-in.html";
 }
    
//  rajappanabhiraj@gmail.com
 
});

backdrop.addEventListener("click", function () {
  closeModal();
  iframe.src = "sign-in.html";
});

closebtn.addEventListener("click", function () {
  closeModal();
  iframe.src = "sign-in.html";
});

$(document).scroll(function () {
  var myID = document.getElementById("advertisement");
  var footer = document.querySelector("#footer");
  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 100) {
      myID.className = "advertisement show";
      footer.style.paddingBottom = "5rem";
    } else {
      myID.className = "advertisement hide";
      footer.style.paddingBottom = "";
    }
  };
  window.addEventListener("scroll", myScrollFunc);
});

document.getElementById("glass").addEventListener("click", myfunc)
function myfunc() {
    console.log(100);
}

function debounce(fn, delay) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            fn();
        }, delay);
    }
}

// document.getElementById("hide").style.display = "none";

const data = debounce(input_movie, 1000);
document.getElementById("search_input").addEventListener("input", data);

function input_movie() {
    let input = document.getElementById("search_input").value;
    console.log(input);

    if(input!=""){
      document.getElementById("hide").style.display = "none";
      document.getElementById("unhide").innerHTML=""

      let movieName = document.getElementById("search_input").value.replaceAll(" ","+");
      let url = `https://apple-tv-api.glitch.me/Searchdata?q=${movieName}`;
      let fetchPromise = fetch(url)
      .then(function (res) {
          res.json().then(function (data) {
              if(data.length>0){
                console.log(data.length);
                document.getElementById("search_input").innerHTML ="";
                // console.log(data.Search);
                document.getElementById("unhide").innerHTML=""
                data.map(function (elem) {
                 const div = document.createElement("div");
                 div.className="grid"
                 const image = document.createElement("img");
                 image.src = elem.image
                 const name= document.createElement("h3");
                 name.innerText=elem.name
                 const a_tag = document.createElement("a");
                 a_tag.href = elem.link
                 a_tag.addEventListener("click", () => {
                  var name ="Searchdata"
                  var id=elem.id
                  localStorage.setItem("name",name)
                  localStorage.setItem("id",id)
                 
                })
                 a_tag.append(image,name)
                 div.append(a_tag)
                 document.getElementById("unhide").append(div)

                 
              });
            }
            else{
             console.log("nodata")
            }
            }).catch(function (err) {
              console.log(err)

            });
            
          });



    }else{
      document.getElementById("unhide").innerHTML=""
      document.getElementById("hide").style.display = "block";
      
    }




}

document.getElementById("play_button").addEventListener("click", playfn);
function playfn() {


    if (document.getElementById("my_Video").paused == false) {
        document.getElementById("my_Video").pause();
        document.getElementById("play_img").src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png";
    }
    else {
        document.getElementById("my_Video").play();
        document.getElementById("play_img").src = "https://findicons.com/files/icons/2315/default_icon/256/media_play.png";
    }

}

const delayed = setTimeout(mydelay, 3500);
function mydelay() {
  
     document.getElementById("my_Video").play();
}

document.getElementById("vol_button").addEventListener("click", mute_un);
function mute_un() {
    console.log(document.getElementById("my_Video").muted);
    if (document.getElementById("my_Video").muted) {
        document.getElementById("my_Video").muted = false;
        document.getElementById("vol_img").src = "https://toppng.com/uploads/preview/speaker-icon-jpg-11549872459jv0pzshi9f.png";
    }
    else {
        document.getElementById("my_Video").muted = true;
        document.getElementById("vol_img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mute_Icon.svg/2048px-Mute_Icon.svg.png";
    }

}
document.querySelector("#q1").addEventListener("click", visible1);

function visible1() {
    if (document.getElementById("see_me1").style.display == "block") {
        document.getElementById("see_me1").style.display = "none";

    }
    else {
        document.getElementById("see_me1").style.display = "block";

    }


}
document.querySelector("#q2").addEventListener("click", visible2);

function visible2() {
    if (document.getElementById("see_me2").style.display == "block") {
        document.getElementById("see_me2").style.display = "none";

    }
    else {
        document.getElementById("see_me2").style.display = "block";


    }


}
document.querySelector("#q3").addEventListener("click", visible3);

function visible3() {
    if (document.getElementById("see_me3").style.display == "block") {
        document.getElementById("see_me3").style.display = "none";

    }
    else {
        document.getElementById("see_me3").style.display = "block";


    }


}
document.querySelector("#q4").addEventListener("click", visible4);

function visible4() {
    if (document.getElementById("see_me4").style.display == "block") {
        document.getElementById("see_me4").style.display = "none";

    }
    else {
        document.getElementById("see_me4").style.display = "block";


    }


}
document.querySelector("#q5").addEventListener("click", visible5);

function visible5() {
    if (document.getElementById("see_me5").style.display == "block") {
        document.getElementById("see_me5").style.display = "none";

    }
    else {
        document.getElementById("see_me5").style.display = "block";


    }


}
document.querySelector("#q6").addEventListener("click", visible6);

function visible6() {
    if (document.getElementById("see_me6").style.display == "block") {
        document.getElementById("see_me6").style.display = "none";

    }
    else {
        document.getElementById("see_me6").style.display = "block";


    }


}
document.querySelector("#q7").addEventListener("click", visible7);

function visible7() {
    if (document.getElementById("see_me7").style.display == "block") {
        document.getElementById("see_me7").style.display = "none";

    }
    else {
        document.getElementById("see_me7").style.display = "block";


    }


}
document.querySelector("#q8").addEventListener("click", visible8);

function visible8() {
    if (document.getElementById("see_me8").style.display == "block") {
        document.getElementById("see_me8").style.display = "none";

    }
    else {
        document.getElementById("see_me8").style.display = "block";


    }


}
document.querySelector("#q9").addEventListener("click", visible9);

function visible9() {
    if (document.getElementById("see_me9").style.display == "block") {
        document.getElementById("see_me9").style.display = "none";

    }
    else {
        document.getElementById("see_me9").style.display = "block";


    }


}
document.querySelector("#q10").addEventListener("click", visible10);

function visible10() {
    if (document.getElementById("see_me10").style.display == "block") {
        document.getElementById("see_me10").style.display = "none";

    }
    else {
        document.getElementById("see_me10").style.display = "block";


    }


}
document.querySelector("#q11").addEventListener("click", visible11);

function visible11() {
    if (document.getElementById("see_me11").style.display == "block") {
        document.getElementById("see_me11").style.display = "none";

    }
    else {
        document.getElementById("see_me11").style.display = "block";


    }


}
document.querySelector("#q12").addEventListener("click", visible12);

function visible12() {
    console.log(1);
    if (document.getElementById("see_me12").style.display == "block") {
        document.getElementById("see_me12").style.display = "none";

        console.log(2);

    }
    else {
        document.getElementById("see_me12").style.display = "block";



    }


}
document.querySelector("#q13").addEventListener("click", visible13);

function visible13() {
    if (document.getElementById("see_me13").style.display == "block") {
        document.getElementById("see_me13").style.display = "none";

    }
    else {
        document.getElementById("see_me13").style.display = "block";


    }


}

watchpremieres()

async function watchpremieres(){
  try{
    const res=await fetch('https://apple-tv-api.glitch.me/watch_premieres');
    const data=await res.json();
    
    showwatchpremieres(data)

  }catch(err){
    console.log(err);
}
}





function showwatchpremieres(data){
  data.map(function(elem){
    const innerdiv = document.createElement("div");
    const a_tag = document.createElement("a");
    // a_tag.href = "";
    
    const img = document.createElement("img");

    img.src = elem.image;
    a_tag.append(img)
    innerdiv.append(a_tag)
    innerdiv.setAttribute("class","inner_seasons")
    document.querySelector(".all_seasons_div").append(innerdiv);
  })
  
  
  $('.all_seasons_div').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}




  latest_original()

async function latest_original(){
  try{
    const res=await fetch('https://apple-tv-api.glitch.me/latest_original');
    const data=await res.json();
    
    showlatest_original(data)

  }catch(err){
    console.log(err);
}
}

function showlatest_original(data){
  
  data.map(function(elem){
    const bigdiv = document.createElement("div");
    bigdiv.setAttribute("class", "d-flex bigdiv");
  
    const imagediv = document.createElement("div")
    const a_tag= document.createElement("a");
    
    
    const img = document.createElement("img");
    img.src = elem.image;
    a_tag.append(img)
    imagediv.append(a_tag);
    if(localStorage.getItem("isLogined")=="true"){
      a_tag.href = elem.link;
    }else{
     
    }
    imagediv.setAttribute("class","imagediv");
    a_tag.addEventListener("click", () => {
      var name ="latest_original"
      var id=elem.id
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
    }

    
    
    )
    
    const details = document.createElement("div")
    details.setAttribute("class","latest_details")
    const heading = document.createElement("p")
    heading.innerText = elem.head;
    heading.setAttribute("class","originals_head")
  
    const sub = document.createElement("p")
    sub.innerText = elem.name;
    const desc = document.createElement("p");
    desc.innerText= elem.description;
    desc.setAttribute("class", "originals_head");
  
    details.append(heading,sub,desc);
  
    bigdiv.append(imagediv,details);
  
    document.querySelector(".inside_latest").append(bigdiv);
  });
  
  $('.inside_latest').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  
  

  coming_soon()

async function coming_soon(){
  try{
    const res=await fetch('https://apple-tv-api.glitch.me/coming_soon');
    const data=await res.json();
    
    showcoming_soon(data)

  }catch(err){
    console.log(err);
}
}

function showcoming_soon(data) {
  data.map(function(elem){
  
    const div = document.createElement("div");
    div.setAttribute("class", "comingSoonData");
  
    const img = document.createElement("img");
    img.src= elem.image;
    const a_tag = document.createElement("a");
    a_tag.href = "#";
   
    const title = document.createElement("p");
    title.innerText= elem.tag;
  
    div.append(img,title);
    a_tag.append(div)
    document.querySelector(".inner_coming_soon").append(a_tag);
  });
  
  $('.inner_coming_soon').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  
  let big_slides = [
    {image :"https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/cf/08/c2/cf08c2dc-09de-7051-8f45-26bc88e35ec3/5869a9d8-e575-417f-a315-5d78822f6886.png/1320x495sr.png",
    tag : "Every family has its own language.",
    link : "coda.html"},
    {image :"https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/67/ad/d0/67add023-9baa-9f3c-3999-0232ee7ab869/07dec570-b1ae-4348-bce7-3ae353ce335b.png/1320x495sr.png",
    tag : "Four generations. One destiny.",
    link : "https://tv.apple.com/us/show/pachinko/umc.cmc.17vf6g68dy89kk1l1nnb6min4?ctx_brand=tvs.sbd.4000"},
    {image :"https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/5f/13/62/5f136213-6138-eab4-a3a8-30e56364ac56/RVNXLVRWQS1XVy1UZWRfTGFzc29fUzItQ0NBX0F3YXJkLnBuZw.png/1320x495sr.png",
    tag : "Kindness makes a comeback.",
    link : ""},
    {image :"https://is3-ssl.mzstatic.com/image/thumb/Features126/v4/38/ea/d8/38ead8ac-0cb6-a41f-fcc4-25b0e3e92ff1/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZV9TZXZlcmFuY2UucG5n.png/1320x495sr.png",
    tag : "We’re all different people at work.",
    link : ""},
    {image :"https://is5-ssl.mzstatic.com/image/thumb/Features116/v4/9d/ba/f8/9dbaf8be-aa79-eece-b465-497c7d9fd1fa/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZS1UaGVfQWZ0ZXJwYXJ0eS5wbmc.png/1320x495sr.png",
    tag : "You’d kill for an invite.",
    link : ""},
    {image :"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/85/3c/c0/853cc067-fb76-5346-2411-705fcc8203de/RVNXLVRWQS1XVy1Td2FuX1NvbmctTkFBQ1BfQXdhcmQucG5n.png/1320x495sr.webp",
    tag : "A thought-provoking exploration of love, loss, and sacrifice.",
    link : ""},
    {image :"https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/7f/50/36/7f5036da-fcf2-21b0-5c22-e1a137459a90/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZS1GaW5jaC1sYW5nPWVuX3VzLnBuZw.png/1320x495sr.webp",
    tag : "Take an unforgettable journey.",
    link : ""},
    {image :"https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/b0/e3/6e/b0e36ee0-6bd7-107d-a106-f06c28c5607e/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZS1Gb3JfQWxsX01hbmtpbmQtbGFuZz1lbl91cy5wbmc.png/1320x495sr.webp",
    tag : "The race continues.",
    link : ""},
  ];
  
  big_slides.map(function(elem){
    const div = document.createElement("div");
    div.setAttribute("class", "innerBigSlides");
  
    const img = document.createElement("img");
    img.src= elem.image;
    const a_tag = document.createElement("a");
    a_tag.href = elem.link;
    const title = document.createElement("p");
    title.innerText= elem.tag;
  
    div.append(img,title);
    a_tag.append(div)
  
    document.querySelector(".big_slides").append(a_tag);
  });
  
  $('.big_slides').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  

  thrillingseries()

async function thrillingseries(){
  try{
    const res=await fetch('https://apple-tv-api.glitch.me/thrillingseries');
    const data=await res.json();
    
    showthrillingseries(data)

  }catch(err){
    console.log(err);
}
}

function showthrillingseries(data) {
  data.map(function(elem){
    const innerdiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = elem.image;
    const a_tag = document.createElement("a");
    if(localStorage.getItem("isLogined")=="true"){
      a_tag.href = elem.link;
    }else{
     
    }
    
    innerdiv.append(img)
    
    a_tag.append(innerdiv)
    a_tag.addEventListener("click", () => {
      var name ="thrillingseries"
      var id=elem.id
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
    })
  
    innerdiv.setAttribute("class","pageToScreenData")
    document.querySelector(".insidePageToScreen").append(a_tag);
  })
  
  $('.insidePageToScreen').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  



 











  getmostpopular()

  async function getmostpopular(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/mostpopularnow');
      const data=await res.json();
      
      displaymostpopularnow(data)
      showinvasion(data)

    }catch(err){
      console.log(err);
  }
}

  

  function displaymostpopularnow(data){
  
    data.map(function(elem){
      const innerdiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = elem.image;
      innerdiv.append(img)
    
      const a_tag = document.createElement("a");
      if(localStorage.getItem("isLogined")=="true"){
        a_tag.href = elem.link;
      }else{
       
      }
      a_tag.addEventListener("click", ()=>{
        var name ="mostpopularnow"
        var id=elem.id
        localStorage.setItem("name",name),
        localStorage.setItem("id",id)
      }
      
      
      )
      
      a_tag.append(innerdiv)
      innerdiv.setAttribute("class","ambitionData")
      document.querySelector(".innerAmbition").append(a_tag);
    })
    
    $('.innerAmbition').slick({
      dots: false,
      infinite: false,
      speed: 650,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  
  
  
  

  laughoutloud()

  async function laughoutloud(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/laughoutloud');
      const data=await res.json();
      
      showlaughoutloud(data)

    }catch(err){
      console.log(err);
  }
}
  
function showlaughoutloud(data){
  data.map(function(elem){
    const innerdiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = elem.image;
    const a_tag = document.createElement("a");
    if(localStorage.getItem("isLogined")=="true"){
      a_tag.href = elem.link;
    }
    a_tag.addEventListener("click", () => {
      var name ="laughoutloud"
      var id=elem.id
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
    })
    innerdiv.append(img)
  
    a_tag.append(innerdiv)
    innerdiv.setAttribute("class","findingVoicesData")
    document.querySelector(".innerFindingVoices").append(a_tag);
  })
  
  $('.innerFindingVoices').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  

  extraordinary()

  async function extraordinary(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/extraordinary');
      const data=await res.json();
      
      showextraordinary(data)

    }catch(err){
      console.log(err);
  }
}

function showextraordinary(data) {
  data.map(function(elem){
    const bigdiv = document.createElement("div");
    bigdiv.setAttribute("class", "d-flex bigdiv");
  
    const imagediv = document.createElement("div")
    const img = document.createElement("img");
    img.src = elem.image;
    imagediv.append(img);
    imagediv.setAttribute("class","imagediv");
    
    const details = document.createElement("div")
    details.setAttribute("class","conversation_details")
    const heading = document.createElement("p")
    heading.innerText = elem.head;
    heading.setAttribute("class","conversation_head")
  
    const sub = document.createElement("p")
    sub.innerText = elem.name;
    const desc = document.createElement("p");
    desc.innerText= elem.description;
    desc.setAttribute("class", "conversation_head");
  
    details.append(heading,sub,desc);
  
    bigdiv.append(imagediv,details);
  
    document.querySelector(".inside_conversation").append(bigdiv);
  });
  
  $('.inside_conversation').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  
  
    
  
  powerOFfriendship()

  async function powerOFfriendship(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/powerOFfriendship');
      const data=await res.json();
      
      showpowerOFfriendship(data)

    }catch(err){
      console.log(err);
  }
}
  function  showpowerOFfriendship(data) {
    data.map(function(elem){
      const innerdiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = elem.image;
      innerdiv.append(img)
      const a_tag = document.createElement("a");
      if(localStorage.getItem("isLogined")=="true"){
        a_tag.href = elem.link;
      }else{
       
      }
      a_tag.append(innerdiv)
    
      innerdiv.setAttribute("class","friendshipData")
      document.querySelector(".innerFriendship").append(a_tag);
    })
    
    $('.innerFriendship').slick({
      dots: false,
      infinite: false,
      speed: 650,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    const video = document.getElementById("video_background");
    video.addEventListener("canplay", function() {
      setTimeout(function() {
        video.play();
      }, 5000);
    });

  }


  
  
  
  
  

  dramaseries()

  async function dramaseries(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/dramaseries');
      const data=await res.json();
      
      showdramaseries(data)

    }catch(err){
      console.log(err);
  }
}
  
function  showdramaseries(data) {
  data.map(function(elem){
    const innerdiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = elem.image;
    innerdiv.append(img)
    innerdiv.setAttribute("class","dramaSeriesData")
    document.querySelector(".innerDramaSeries").append(innerdiv);
  })
  
  $('.innerDramaSeries').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  // for pachinko is here 
  $('.small_pachinko').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  featurefilm()

  async function featurefilm(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/featurefilm');
      const data=await res.json();
      
      showfeaturefilm(data)

    }catch(err){
      console.log(err);
  }
}

function showfeaturefilm(data) {
  data.map(function(elem){
    const innerdiv = document.createElement("div");
    const img = document.createElement("img");
    const a_tag=document.createElement("a");
    if(localStorage.getItem("isLogined")=="true"){
      a_tag.href = elem.link;
    }else{
     
    }
    
    img.src = elem.image;
    img.addEventListener("click", () => {
      var name ="featurefilm"
      var id=elem.id
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
     
    })
    a_tag.append(img)
    innerdiv.append(a_tag)
    innerdiv.setAttribute("class","featureFilmData")
    document.querySelector(".innerFeatureFilm").append(innerdiv);
  })
  
  
  $('.innerFeatureFilm').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  

comedyseries()

  async function comedyseries(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/comedyseries');
      const data=await res.json();
      
      showcomedyseries(data)

    }catch(err){
      console.log(err);
  }
}

function  showcomedyseries(data) {
  data.map(function(elem){
    const innerdiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = elem.image;
    const a_tag=document.createElement("a");
    if(localStorage.getItem("isLogined")=="true"){
      a_tag.href = elem.link;
    }
    a_tag.addEventListener("click", () => {
     
      var name ="comedyseries"
      var id=elem.id
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
    })
    
    a_tag.append(img)
    innerdiv.append(a_tag)
    innerdiv.setAttribute("class","comedySeriesData")
    document.querySelector(".innerComedySeries").append(innerdiv);
  })
  
  
  $('.innerComedySeries').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
  
  
  $('.small_amazing_planet').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  
  $('.small_kid_family').slick({
    dots: false,
    infinite: false,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  

  funforall()

  async function funforall(){
    try{
      const res=await fetch('https://apple-tv-api.glitch.me/funforall');
      const data=await res.json();
      
      showfunforall(data)

    }catch(err){
      console.log(err);
  }
}

  function showfunforall(data) {
    data.map(function(elem){
      const innerdiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = elem.image;
      innerdiv.append(img)
      innerdiv.setAttribute("class","funForAllData")
      document.querySelector(".innerFunForAll").append(innerdiv);
    })
    
    
    $('.innerFunForAll').slick({
      dots: false,
      infinite: false,
      speed: 650,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  function showinvasion(data){
    data.map(function(elem){
      var innerdiv = document.createElement("div");
      var img = document.createElement("img");
      img.src = elem.image;
      innerdiv.append(img)
    
      var a_tag = document.createElement("a");
      if(localStorage.getItem("isLogined")=="true"){
        a_tag.href = elem.link;
      }
      a_tag.addEventListener("click", ()=>{
        var name ="mostpopularnow"
        var id=elem.id
        localStorage.setItem("name",name),
        localStorage.setItem("id",id)
      })
      a_tag.append(innerdiv)
      innerdiv.setAttribute("class","invasionData")
      document.querySelector(".sliderBox").append(a_tag);
    })
  }
  
  
  
  
  
  
  
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.querySelector(".bottom_bar").style.bottom = "0";
    } else {
      document.querySelector(".bottom_bar").style.bottom = "-100px";
    }
  }

document.getElementById("sago").addEventListener("click",sago)
  function sago(){
    event.preventDefault();
    if(localStorage.getItem("isLogined")=="true"){
      var name ="latest_original"
      var id=1
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
    location.href="./seriesReview/seriesReview.html"
    }else{
      alert("Login is required")
    }
    

  }

  document.getElementById("see").addEventListener("click",see)

  function see(){
    event.preventDefault();
    if(localStorage.getItem("isLogined")=="true"){
      console.log("see")
      var name ="mostpopularnow"
      var id=1
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
      location.href="./seriesReview/seriesReview.html"
  
    }else{
      alert("Login is required")
    }
    
  }


  document.getElementById("sidney").addEventListener("click",sidney)
  function sidney(){
    event.preventDefault();
    if(localStorage.getItem("isLogined")=="true"){
      var name ="featurefilm"
      var id=1
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
  location.href="./movieReview/movieReview.html"
    }else{
      alert("Login is required")
    }
   

  }




  