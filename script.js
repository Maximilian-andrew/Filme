// Button-Element abrufen
const addToWatchlistButton = document.getElementById('add-to-watchlist');

// Button-Klick-Ereignis
addToWatchlistButton.addEventListener('click', function() {
  // Informationen über den Film
  const film = {
    title: 'The Shawshank Redemption',
    image: 'https://bit.ly/3NIODu5',
    // Weitere Informationen...
  };

  // Watchlist-Array aus dem localStorage abrufen oder ein neues Array erstellen
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

  // Film zur Watchlist hinzufügen
  watchlist.push(film);

  // Watchlist-Array in localStorage speichern
  localStorage.setItem('watchlist', JSON.stringify(watchlist));

  // Manuelle Weiterleitung zur Watchlist-Seite
  window.location.href = '../../watchlist.html';
});
