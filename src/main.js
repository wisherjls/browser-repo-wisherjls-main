// Personal data to pass to components
const personalInfo = {
  name: 'Your Name',
  title: 'Web Developer & Game Enthusiast',
  about:
    'A passionate developer who loves creating interactive applications and exploring new technologies.',
  skills: ['C#', 'C++', 'Lua / GLua', 'Game Development'],
  games: [
    {
      title: 'Spider-Man',
      genre: 'Open World, Action-Adventure',
      imageUrl: 'images/game1.jpg',
      description:
        'I love Spider-Man because of its incredible attention to detail, the immersive open world, and the compelling story. It delves into Peter Parker’s life, balancing responsibilities as a student, volunteer, and hero. Doctor Octavius’s transformation adds a heartbreaking depth to the story.',
    },
    {
      title: 'Dragon Ball Xenoverse 2',
      genre: 'Fighting',
      imageUrl: 'images/game2.jpg',
      description:
        'i love xenoverse 2 because it lets you dive into the Dragon Ball universe with intense battles as your own customizable characters.',
    },
  ],
  year: 2099,
}

// Header Component
function Header(props) {
  return `
    <header>
      <h1>${props.name}</h1>
      <h2>${props.title}</h2>
    </header>
  `
}
// About Component
function About(props) {
  return `
    <section id="about">
      <h2>About Me</h2>
      <p>${props.text}</p>
    </section>
  `
}
// Skills Component
function Skills(props) {
  return `
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        ${props.skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
    </section>
  `
}
// Content Component
function Content(props) {
  const gamesList = props.games
    .map(
      (game) => `
      <article class="game-card">
        <h3>${game.title}</h3>
        <img src="${game.imageUrl}" alt="${game.title} cover image">
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p>${game.description}</p>
      </article>
    `,
    )
    .join('')
  //gross table
  const gamesTable = `
  <table border="1" cellpadding="5" cellspacing="0">
    <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      ${props.games
        .map(
          (game) => `
          <tr>
            <td>${game.title}</td>
            <td>${game.genre}</td>
          </tr>
        `,
        )
        .join('')}
    </tbody>
  </table>
`

  return `
    <section id="favorite-games">
      <h2>My Favorite Games</h2>
      <div class="games-container">
        ${gamesList}
      </div>
      <hr />
      <h3>Games Summary</h3>
      ${gamesTable}
    </section>
  `
}
// Footer Component
function Footer(props) {
  return `
    <footer>
      <p>© ${props.year} ${props.name}. All rights reserved.</p>
      <hr />
      <form id="contact-form">
        <h3>Contact Me</h3>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Your email" />
        <button type="submit">Submit</button>
      </form>
      <p>Visit my <a href="https://example.com" target="_blank">Portfolio</a></p>
    </footer>
  `
}
