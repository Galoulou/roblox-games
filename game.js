/* ==========================================
   COOKIE STUDIOS
   GAME PAGE
   by Galoulou
========================================== */

console.log("🍪 Cookie Studios");
console.log("🎮 Game Page");

// ======================
// Animation du header
// ======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(5,10,30,.92)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.25)";
        header.style.boxShadow = "none";

    }

});

// ======================
// Bouton Jouer
// ======================

const playButton = document.getElementById("play-button");

if (playButton) {

    playButton.addEventListener("mouseenter", () => {

        playButton.style.transform = "scale(1.05)";

    });

    playButton.addEventListener("mouseleave", () => {

        playButton.style.transform = "scale(1)";

    });

}

// ======================
// Animation captures
// ======================

const screens = document.querySelectorAll(".screen");

screens.forEach((screen, index) => {

    screen.style.opacity = "0";

    screen.style.transform = "translateY(40px)";

    setTimeout(() => {

        screen.style.transition = ".6s";

        screen.style.opacity = "1";

        screen.style.transform = "translateY(0px)";

    }, index * 180);

});

// ======================
// Animation updates
// ======================

const updates = document.querySelectorAll(".update");

updates.forEach((update, index) => {

    update.style.opacity = "0";

    update.style.transform = "translateX(-30px)";

    setTimeout(() => {

        update.style.transition = ".5s";

        update.style.opacity = "1";

        update.style.transform = "translateX(0px)";

    }, 300 + index * 200);

});

// ======================
// Informations
// ======================

const game = {

    title: "Zombie Survival",

    creator: "Galoulou",

    version: "1.0",

    players: "1-8"

};

console.table(game);

// ======================
// Heure locale
// ======================

const date = new Date();

console.log(

"Ouverture :",

date.toLocaleDateString(),

date.toLocaleTimeString()

);

// ======================
// Préparation V2
// ======================

// Ce bloc servira plus tard
// au chargement automatique
// des informations depuis games.json

async function loadGame(){

    try{

        const response = await fetch("games.json");

        if(!response.ok){

            return;

        }

        const games = await response.json();

        console.log("Games :", games);

    }

    catch(error){

        console.log("games.json non chargé.");

    }

}

loadGame();

// ======================
// Fin
// ======================

console.log("✅ Cookie Studios V1 chargé.");
