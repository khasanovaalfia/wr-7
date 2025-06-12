export function getCharacters() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.results)
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

export function getLocation() {
  return fetch('https://rickandmortyapi.com/api/location')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.results)
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

export function getEpisode() {
  return fetch('https://rickandmortyapi.com/api/episode')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.results)
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}