/* ==========================================
   COOKIE STUDIOS
   by LA TEAM COOKIE
========================================== */

// Header transparent -> solide au scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(5,10,30,.92)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    }

    else{

        header.style.background = "rgba(10,15,40,.55)";
        header.style.boxShadow = "none";

    }

});

// Apparition des cartes

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".game-card,.news-card,.contact-card,.about-box"
).forEach(card=>observer.observe(card));


// Effet sur les boutons

document.querySelectorAll("a").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transition=".25s";

    });

});


// ===========================
// Barre de recherche (future)
// ===========================

const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

document.querySelectorAll(".game-card").forEach(card=>{

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}


// ===========================
// Chargement des jeux JSON
// ===========================

async function loadGames(){

try{

const response = await fetch("games.json");

if(!response.ok) return;

const games = await response.json();

console.log("Jeux chargés :",games);

}

catch(e){

console.log("games.json introuvable (normal pour l'instant)");

}

}

loadGames();


// ===========================
// Console
// ===========================

console.log("%c🍪 COOKIE STUDIOS",
"font-size:22px;font-weight:bold;color:#4ea3ff;");

console.log("%cDéveloppé par Galoulou",
"font-size:15px;color:white;");

console.log("%cDepuis 2024",
"font-size:15px;color:#5ec3ff;");const gamesContainer = document.getElementById("games-container");
const searchInput = document.getElementById("search");

let games = [];

// Charger les jeux
async function loadGames() {

    try {

        const response = await fetch("games.json");

        games = await response.json();

        displayGames(games);

    } catch (error) {

        gamesContainer.innerHTML += `

<div class="game-card">

    <div class="game-image">

        <div class="badge">${game.badge}</div>

        🎮

    </div>

    <div class="game-content">

        <h3>${game.name}</h3>

        <p>${game.description}</p>

        <div class="infos">

            <span>🎯 ${game.genre}</span>

            <span>👥 ${game.players}</span>

        </div>

        <div class="status">

            ${game.status}

        </div>

        <div class="game-buttons">

            <a href="game.html?id=${game.id}" class="details-btn">

                📄 Voir

            </a>

            <a href="${game.url}"

            target="_blank"

            class="play-btn">

                ▶ Jouer

            </a>

        </div>

    </div>

</div>

`;
           
// Afficher les jeux
function displayGames(list) {

    gamesContainer.innerHTML = "";

    if (list.length === 0) {

        gamesContainer.innerHTML = `
            <p>Aucun jeu trouvé.</p>
        `;

        return;

    }

    list.forEach(game => {

        gamesContainer.innerHTML += `

        <div class="game-card">

            <div class="game-image">
                🎮
            </div>

            <div class="game-content">

                <h3>${game.name}</h3>

                <p>${game.description}</p>

                <div class="game-buttons">

    <a href="game.html?id=${game.id}" class="details-btn">
        📄 Voir le jeu
    </a>

    <a href="${game.url}" target="_blank" class="play-btn">
        ▶ Jouer sur Roblox
    </a>

</div>

            </div>

        </div>

        `;

    });

}

// Recherche
searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = games.filter(game =>

        game.name.toLowerCase().includes(value) ||

        game.description.toLowerCase().includes(value)

    );

    displayGames(filtered);

});

// Lancer
loadGames();
/* ==========================================
      COOKIE STUDIOS
      Partie 2
========================================== */

// Animation douce des cartes

const cards = document.querySelectorAll(".game-card");

cards.forEach((card,index)=>{

card.style.animationDelay=`${index*0.12}s`;

});


// Boutons "Jouer"

document.querySelectorAll(".play-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});


// Scroll fluide

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// Petit effet sur le logo

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("mouseenter",()=>{

logo.style.transform="rotate(-2deg) scale(1.04)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="rotate(0deg) scale(1)";

});

}


// Message de bienvenue

window.addEventListener("load",()=>{

console.log("🍪 Bienvenue sur Cookie Studios");

console.log("🎮 Développé par Galoulou");

console.log("💙 Merci de votre visite !");

});


// Préparation des futures mises à jour

const CookieStudios={

version:"2.0",

developer:"Galoulou",

since:2024,

games:3

};

console.table(CookieStudios);
