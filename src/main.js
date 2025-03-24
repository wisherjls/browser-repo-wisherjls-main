// Your personal data to pass to components
const personalInfo = {
  name: 'Your Name',
  title: 'Web Developer & Game Enthusiast',
  about: 'A brief description about yourself...',
  skills: ['c#', 'c++', 'lua / Glua', 'game development'],
  games: [
    {
      title: 'spiderman',
      genre: 'open world, action-adventure',
      imageUrl: 'images/game1.jpg',
      description: 'Why I love this game...',
    },
    {
      title: 'Game Title 2',
      genre: 'Strategy',
      imageUrl: 'images/game2.jpg',
      description: 'What makes this game special...',
    },
  ],
  year: 2099,
}

// Main App component
function App() {
  // Render the complete page by composing components
  return `
    <main id="personal-website">
    ${Header(personalInfo)}
    ${Content({ games: personalInfo.games })}

    </main>
  `
}

// Example of a Header component
function Header(props) {
  return `
    <header>
      <h1>${props.name}</h1>
      <h2>${props.title}</h2>
      <p>${props.about}</p>
      <h3>skills</h3>
      <ul>
        ${props.skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
      <p>Year: ${props.year}</p>
    </header>
  `
}
// Example of a Content component for favorite games
function Content(props) {
  // Using the games array passed as a prop
  const gamesList = props.games
    .map(
      (game) =>
        `<article class="game-card">
      <h3>${game.title}</h3>
      <img src="${game.imageUrl}" alt="${game.title} cover image">
      <p><strong>Genre:</strong> ${game.genre}</p>
      <p>${game.description}</p>
    </article>`,
    )
    .join('')

  return `
    <section id="favorite-games">
      <h2>My Favorite Games</h2>
      <div class="games-container">
        ${gamesList}
      </div>
    </section>
  `
}

// Rendering to the DOM
document.getElementById('app').innerHTML = App()
console.log('Hello, world!')
