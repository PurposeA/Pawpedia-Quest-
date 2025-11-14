const sunny = document.getElementById("sunny");
const peach = document.getElementById("peach");
const button = document.getElementById("startAdventure");

let moving = false;

function movePets() {
    if (moving) return;
    moving = true;

    sunny.style.transform = "translateY(-20px)";
    peach.style.transform = "translateY(-20px)";

    setTimeout(() => {
        sunny.style.transform = "translateY(0)";
        peach.style.transform = "translateY(0)";
        moving = false;
    }, 400);
}

setInterval(movePets, 1500);

button.addEventListener("click", () => {
    alert("Adventure Mode Coming Soon! 🐾✨");
});
