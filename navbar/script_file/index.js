import navbar from "../component/navbar.js";
console.log(navbar)
document.getElementById("navbar").innerHTML = navbar();

let user_Login = () => {
    console.log(1);
}
let mic = () => {

    console.log(32);
}
let input_movie = () => {
    let inp = document.getElementById("search_input").value;
    console.log(inp);
}


function debounce(fn, delay) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(fn)
        }

    }

}
document.getElementById("vol_button").addEventListener("click", mute_un);
function mute_un() {
    console.log(document.getElementById("my_Video").muted);
    if (document.getElementById("my_Video").muted) {
        document.getElementById("my_Video").muted = false;
        document.getElementById("vol_img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mute_Icon.svg/2048px-Mute_Icon.svg.png";
    }
    else {
        document.getElementById("my_Video").muted = true;
        document.getElementById("vol_img").src = "https://toppng.com/uploads/preview/speaker-icon-jpg-11549872459jv0pzshi9f.png";
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