import { getEpisode, getLocation } from './characters';
import './style.css';
import type { Character, Episode, Location } from './types';

const cardRow = document.querySelector('#cards-row');
const pagination = document.createElement('div');
pagination.className = 'pagination';
if (cardRow && cardRow.parentElement) {
  cardRow.parentElement.appendChild(pagination);
}

let currentPage = 1;

function fetchCharacters(page: number) {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(async data => {
      const characters: Character[] = data.results;
      const [locations, episodes] = await Promise.all([
        getLocation(),
        getEpisode()
      ]);
      renderCards(characters, locations, episodes);
      renderPagination(data.info.pages);
    });
}

function renderCards(characters: Character[], locations: Location[], episodes: Episode[]) {
  if (!cardRow) return;
  const cardHtml = characters.map((character: Character) => {
    const location = locations.find(
      (loc: Location) => loc.url === character.location.url
    );
    const firstEpisodeUrl = character.episode[0];
    const episode = episodes.find(
      (ep: Episode) => ep.url === firstEpisodeUrl
    );
    return `
      <article class="character-card">
        <div class="character-card__img-wrapper">
          <img src="${character.image}" alt="${character.name}" />
        </div>
        <div class="character-card__content">
          <div class="character-card__section">
            <a href="character.html?id=${character.id}" class="character-card__external-link"><h2>${character.name}</h2></a>
            <span class="character-card__status">
              <span class="character-card__status-icon character-card__status-icon--${character.status.toLowerCase()}"></span>
              ${character.status} - ${character.species}
            </span>
          </div>
          <div class="character-card__section">
            <span class="character-card__text-gray">Last known location:</span>
            <a href="location.html?id=${location ? location.id : ''}" rel="noopener noreferrer" class="character-card__external-link">${location ? location.name : 'Unknown'}</a>
          </div>
          <div class="character-card__section">
            <span class="character-card__text-gray">First seen in:</span>
            <a href="episode.html?id=${episode ? episode.id : ''}" rel="noopener noreferrer" class="character-card__external-link">${episode ? episode.name : 'Unknown'}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
  cardRow.innerHTML = cardHtml;
}

function renderPagination(totalPages: number) {
  pagination.innerHTML = '';
  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Назад';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      fetchCharacters(currentPage);
    }
  };
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Вперёд';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      fetchCharacters(currentPage);
    }
  };
  const pageInfo = document.createElement('span');
  pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
  pagination.appendChild(prevBtn);
  pagination.appendChild(pageInfo);
  pagination.appendChild(nextBtn);
}

fetchCharacters(currentPage);