const gamesContainer = document.getElementById("games-container");
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
