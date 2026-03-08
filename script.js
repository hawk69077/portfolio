document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Project coming soon!");
    });
});


const text = "Web Developer | Linux Enthusiast | Arch User";
let index = 0;

function typeEffect() {
    if(index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(sec => {

const top = window.scrollY;
const offset = sec.offsetTop - 300;

if(top > offset){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}

});

});
