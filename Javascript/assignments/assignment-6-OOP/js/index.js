console.log('I am live ');


// Class API
class API {
    constructor() {
      this.baseURL = 'https://www.freetogame.com/api/';
    }
  
    async fetchGames(category) {
      const response = await fetch(`${this.baseURL}games?category=${category}`);
      return response.json();
    }
  
    async fetchGameDetails(id) {
      const response = await fetch(`${this.baseURL}game?id=${id}`);
      return response.json();
    }
  }
  
  // Class UI
  class UI {
    static displayGames(games) {
      const gamesSection = document.getElementById('games-section');
      gamesSection.innerHTML = games.map(game => `
        <div class="game-card" data-id="${game.id}">
          <img src="${game.thumbnail}" alt="${game.title}">
          <h3>${game.title}</h3>
        </div>
      `).join('');
    }
  
    static displayGameDetails(details) {
      const detailsSection = document.getElementById('details-section');
      detailsSection.innerHTML = `
        <img src="${details.thumbnail}" alt="${details.title}">
        <h2>${details.title}</h2>
        <p>${details.short_description}</p>
        <button id="back-button">Back</button>
      `;
    }
  
    static toggleSections() {
      const gamesSection = document.getElementById('games-section');
      const detailsSection = document.getElementById('details-section');
      gamesSection.style.display = gamesSection.style.display === 'none' ? 'block' : 'none';
      detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';
    }
  }
  
  // Class GamesSection
  class GamesSection {
    constructor(api) {
      this.api = api;
    }
  
    async loadGames(category) {
      const games = await this.api.fetchGames(category);
      UI.displayGames(games);
      this.addGameClickListener();
    }
  
    addGameClickListener() {
      document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
          const gameId = card.getAttribute('data-id');
          const detailsSection = new DetailsSection(this.api);
          detailsSection.loadDetails(gameId);
          UI.toggleSections();
        });
      });
    }
  }
  
  // Class DetailsSection
  class DetailsSection {
    constructor(api) {
      this.api = api;
    }
  
    async loadDetails(id) {
      const details = await this.api.fetchGameDetails(id);
      UI.displayGameDetails(details);
      document.getElementById('back-button').addEventListener('click', () => {
        UI.toggleSections();
      });
    }
  }
  
  // Main App Initialization
  document.addEventListener('DOMContentLoaded', () => {
    const api = new API();
    const gamesSection = new GamesSection(api);
  
    // Load Games by Default Category
    gamesSection.loadGames('mmorpg');
  });
  