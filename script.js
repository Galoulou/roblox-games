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

        gamesContainer.innerHTML = `
            <p style="color:#ff6b6b;">
                Impossible de charger les jeux.
            </p>
        `;

        console.error(error);

    }

}

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

                <a href="${game.url}"
                   target="_blank">
                    Jouer sur Roblox
                </a>

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
