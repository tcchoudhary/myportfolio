

var typed = new Typed(".typing_text", {
    strings: ["Developer",  "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    cursorChar: '|️',
});

// const li=document.querySelectorAll(".current");
// const sec=document.querySelectorAll("section");

// function activeMenu(){
//     let len=sec.length;
//     while(--len && window.scrollY + 97 < sec[len].offsetTop){}
//     li.forEach(ltx => ltx.classList.remove("current"));
//     li[len].classList.add("current");
// }

// $(".menu a").click(function(){
//     $(".menu a").removeClass("active");
//     $(this).addClass("active");
// });

function onclickmenu(){
    document.getElementById("menu").classList.toggle("change");
}
function navbar(){
    document.getElementById('navbar').classList.toggle("navbar");
}