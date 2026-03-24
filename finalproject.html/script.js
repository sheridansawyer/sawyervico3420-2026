const tracks = [
  { number: 1, title: 'E85', length: '233.3K', mood: 'high-speed opener', description: 'A bold opening track that starts the album with energy and motion.' },
  { number: 2, title: 'Body', length: '115K', mood: 'smooth and confident', description: 'A sleek song with a stylish and catchy feel.' },
  { number: 3, title: 'Rendezvous (Ft. Yeat)', length: '99K', mood: 'dark and futuristic', description: 'A moody collaboration that adds a sharp and layered sound.' },
  { number: 4, title: 'Secondhand (Ft. Rema)', length: '192.6K', mood: 'reflective', description: 'A textured song that feels emotional while still keeping momentum.' },
  { number: 5, title: 'Tiramisu', length: '97.8K', mood: 'sweet flex', description: 'One of the most memorable titles with a playful but polished vibe.' },
  { number: 6, title: 'ATM', length: '145.7K', mood: 'flashy', description: 'A direct and punchy track that stands out with confidence.' },
  { number: 7, title: 'Long Way To Calabasas', length: '75.6K', mood: 'late-night drive', description: 'A track that feels cinematic and fits the album road-trip mood.' },
  { number: 8, title: 'Rosary (Ft. Travis Scott)', length: '124.7K', mood: 'dark stage energy', description: 'A major feature track with a darker and more dramatic sound.' },
  { number: 9, title: 'All The Signs (Ft. Teezo Touchdown)', length: '79.9K', mood: 'experimental', description: 'A song with a unique feature and a slightly different feel.' },
  { number: 10, title: 'Call Back', length: '117K', mood: 'emotional', description: 'A smoother section of the album with a more personal tone.' },
  { number: 11, title: 'Tuition', length: '49K', mood: 'focused', description: 'A track with a clear message and strong rhythmic flow.' },
  { number: 12, title: 'K9 (Ft. SahBabii)', length: '66.1K', mood: 'wild', description: 'A playful and bold feature track that adds more personality.' },
  { number: 13, title: 'Excavator', length: '71.9K', mood: 'heavy', description: 'A track that sounds intense and powerful within the album sequence.' },
  { number: 14, title: 'Gemstone', length: '61.4K', mood: 'luxury', description: 'A polished song that fits the richer side of the album mood.' },
  { number: 15, title: 'OPPOSITE', length: '77K', mood: 'sharp', description: 'A bold title with a strong sound and standout energy.' },
  { number: 16, title: 'TMU', length: '66.1K', mood: 'cool and calm', description: 'A smoother moment that gives the project a nice shift in pace.' },
  { number: 17, title: "Pleasure's Mine", length: '48.7K', mood: 'soft confidence', description: 'A more laid-back moment that still feels stylish and controlled.' },
  { number: 18, title: 'Sweet Home', length: '48K', mood: 'closing reflection', description: 'A strong ending track that gives the album a final grounded feel.' }
];

const trackContainer = document.getElementById('trackContainer');
const trackSearch = document.getElementById('trackSearch');
const favoriteTrack = document.getElementById('favoriteTrack');
const voteForm = document.getElementById('voteForm');
const voteMessage = document.getElementById('voteMessage');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const favoritesList = document.getElementById('favoritesList');
const randomTrackBtn = document.getElementById('randomTrackBtn');
const randomTrackMessage = document.getElementById('randomTrackMessage');

let likedSongs = [];

function updateFavoritesDisplay() {
  favoritesList.textContent = likedSongs.length ? likedSongs.join(', ') : 'None yet';
}

function safeIdFromTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function renderTracks(filteredTracks) {
  trackContainer.innerHTML = '';

  if (filteredTracks.length === 0) {
    trackContainer.innerHTML = '<p>No matching tracks found.</p>';
    return;
  }

  filteredTracks.forEach((track) => {
    const trackId = safeIdFromTitle(track.title);
    const column = document.createElement('div');
    column.className = 'col-md-6 col-xl-4';

    column.innerHTML = `
      <article class="track-card">
        <div class="track-top">
          <div>
            <p class="track-number mb-1">${String(track.number).padStart(2, '0')}</p>
            <h3 class="track-title">${track.title}</h3>
            <p class="track-meta mb-0">Mood: ${track.mood}</p>
            <p class="track-count mb-0">Genius views: ${track.length}</p>
          </div>
        </div>
        <div class="track-actions">
          <button class="track-button" type="button" aria-expanded="false" aria-controls="details-${trackId}">Show details</button>
          <button class="like-button" type="button" aria-label="Like ${track.title}">♡ Favorite</button>
        </div>
        <div class="track-details" id="details-${trackId}">
          <p>${track.description}</p>
          <p class="favorite-note mb-0">This card expands with JavaScript when clicked.</p>
        </div>
      </article>
    `;

    const showButton = column.querySelector('.track-button');
    const details = column.querySelector('.track-details');
    const likeButton = column.querySelector('.like-button');

    showButton.addEventListener('click', () => {
      const isOpen = details.classList.toggle('show');
      showButton.textContent = isOpen ? 'Hide details' : 'Show details';
      showButton.setAttribute('aria-expanded', String(isOpen));
    });

    if (likedSongs.includes(track.title)) {
      likeButton.classList.add('liked');
      likeButton.textContent = '♥ Favorite';
    }

    likeButton.addEventListener('click', () => {
      const isLiked = likedSongs.includes(track.title);

      if (isLiked) {
        likedSongs = likedSongs.filter((song) => song !== track.title);
        likeButton.classList.remove('liked');
        likeButton.textContent = '♡ Favorite';
      } else {
        likedSongs.push(track.title);
        likeButton.classList.add('liked');
        likeButton.textContent = '♥ Favorite';
      }

      updateFavoritesDisplay();
    });

    trackContainer.appendChild(column);
  });
}

trackSearch.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  const filteredTracks = tracks.filter((track) => track.title.toLowerCase().includes(query));
  renderTracks(filteredTracks);
});

tracks.forEach((track) => {
  const option = document.createElement('option');
  option.value = track.title;
  option.textContent = track.title;
  favoriteTrack.appendChild(option);
});

const voteCounts = {
  'E85': 5,
  'Body': 4,
  'Rendezvous (Ft. Yeat)': 6,
  'Secondhand (Ft. Rema)': 8,
  'Tiramisu': 7,
  'ATM': 5,
  'Long Way To Calabasas': 4,
  'Rosary (Ft. Travis Scott)': 9,
  'All The Signs (Ft. Teezo Touchdown)': 4,
  'Call Back': 5,
  'Tuition': 3,
  'K9 (Ft. SahBabii)': 4,
  'Excavator': 4,
  'Gemstone': 3,
  'OPPOSITE': 5,
  'TMU': 4,
  "Pleasure's Mine": 3,
  'Sweet Home': 3
};

const chartContext = document.getElementById('favoritesChart');
const favoritesChart = new Chart(chartContext, {
  type: 'bar',
  data: {
    labels: Object.keys(voteCounts),
    datasets: [{
      label: 'Votes',
      data: Object.values(voteCounts),
      backgroundColor: [
        '#7a5c43', '#9a836d', '#2c2c2c', '#c7bbaf', '#5d4635', '#847568',
        '#4d4038', '#b39d89', '#737373', '#d9d0c7', '#6d5848', '#8a8a8a',
        '#4a3227', '#b7a38f', '#3e3e3e', '#9d8570', '#6a5b52', '#cfc4b8'
      ],
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

voteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selection = favoriteTrack.value;
  voteCounts[selection] += 1;
  favoritesChart.data.datasets[0].data = Object.values(voteCounts);
  favoritesChart.update();
  voteMessage.textContent = `Thanks for voting for ${selection}!`;
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const pressed = document.body.classList.contains('light-mode');
  themeToggle.setAttribute('aria-pressed', String(pressed));
  themeToggle.textContent = pressed ? 'Switch to dark mode' : 'Switch theme';
});

randomTrackBtn.addEventListener('click', () => {
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
  randomTrackMessage.textContent = `You should listen to track ${randomTrack.number}: ${randomTrack.title}.`;
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderTracks(tracks);
updateFavoritesDisplay();