import './style.css';

let apiUrl = 'https://rickandmortyapi.com/api/character';
let cardRow = document.querySelector('#cards-row');

async function fetchCharacters() {
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    let characters = data.results;

    let cardHtml = characters.map((characters: {
      image: string;
      name: string;
      status: any;
      species: any;
      gender: any;
    }) => {
      return (
        `
          <div class="card" id="card">
            <img class="img" src="${characters.image}" alt="" />
            <h2 class="title">${characters.name}</h2>
            <p>${characters.status}</p>
            <p>${characters.species}</p>
            <p>${characters.gender}</p>
          </div>
        `
      );
    });
    if (cardRow) {
      cardRow.innerHTML = cardHtml.join('');
    }
  } catch (error) {
    console.log('Error fetching characters:', error);
  }
}

fetchCharacters();