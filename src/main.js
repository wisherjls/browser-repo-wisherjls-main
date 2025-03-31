import './styles.css'

// Personal data to pass to components
const personalInfo = {
  name: 'Jonathan Sayers',
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

// Main App component
function App() {
  return `
    <main id="personal-website" class="font-serif text-[12pt] m-0 p-0 box-border bg-black text-[#a50101] text-center flex justify-center items-center flex-col min-h-screen animate-fadeIn">
      ${Header({ name: personalInfo.name, title: personalInfo.title })}
      ${About({ text: personalInfo.about })}
      ${Skills({ skills: personalInfo.skills })}
      ${Content({ games: personalInfo.games })}
      ${Footer({ name: personalInfo.name, year: personalInfo.year })}
    </main>
  `
}

// Header Component
function Header(props) {
  return `
    <header class="flex flex-col justify-center items-center text-center">
      <h1 class="text-3xl">${props.name}</h1>
      <h2 class="text-xl">${props.title}</h2>
    </header>
  `
}

// About Component
function About(props) {
  return `
    <section id="about" class="p-4">
      <h2 class="text-2xl">About Me</h2>
      <p class="text-lg">${props.text}</p>
    </section>
  `
}

// Skills Component
function Skills(props) {
  return `
    <section id="skills" class="p-4">
      <h2 class="text-2xl">Skills</h2>
      <ul class="list-inside text-center p-0">
        ${props.skills.map((skill) => `<li class="my-2">${skill}</li>`).join('')}
      </ul>
    </section>
  `
}

// Content Component
function Content(props) {
  const gamesList = props.games
    .map(
      (game) => `
      <article class="game-card p-4 m-4 border border-[#a50101]">
        <h3 class="text-xl text-center">${game.title}</h3>
        <div class="flex justify-center">
          <img src="${game.imageUrl}" alt="${game.title} cover image" class="w-full h-auto max-w-[300px]">
        </div>
        <p class="text-center"><strong>Genre:</strong> ${game.genre}</p>
        <p class="text-center">${game.description}</p>
      </article>
    `,
    )
    .join('')

  // Game summary table
  const gamesTable = `
  <table class="mx-auto text-center border border-[#a50101] w-full sm:w-1/2">
    <thead>
      <tr>
        <th class="p-2 border-b">Title</th>
        <th class="p-2 border-b">Genre</th>
      </tr>
    </thead>
    <tbody>
      ${props.games
        .map(
          (game) => `
          <tr>
            <td class="p-2 border-b">${game.title}</td>
            <td class="p-2 border-b">${game.genre}</td>
          </tr>
        `,
        )
        .join('')}
    </tbody>
  </table>
`

  return `
    <section id="favorite-games" class="p-4">
      <h2 class="text-2xl text-center">My Favorite Games</h2>
      <div class="games-container grid grid-cols-1 sm:grid-cols-2 ">
        ${gamesList}
      </div>
      <h3 class="text-xl mt-6 text-center">Games Summary</h3>
      ${gamesTable}
    </section>
  `
}

// Footer Component
function Footer(props) {
  return `
    <footer class="p-4 bg-black text-[#a50101] mt-8 text-center">
      <p>© ${props.year} ${props.name}. All rights reserved.</p>
      <form id="contact-form" class="mt-4 mx-auto max-w-[400px]">
        <h3 class="text-xl">Contact Me</h3>
        <label for="email" class="block mt-2">Email:</label>
        <input type="email" id="email" placeholder="Your email" class="p-2 px-4 my-2 border-2 border-[#a50101] bg-black text-[#a50101] focus:outline-none focus:ring-2 focus:ring-[#a50101] w-full"/>
        <button type="submit" class="p-2 px-4 my-4 border-2 border-[#a50101] bg-black text-[#a50101] hover:text-white hover:scale-105 transition-all duration-300 w-full">Submit</button>
      </form>
      <p class="mt-4">Visit my <a href="https://github.com/wisherjls/browser-repo-wisherjls-main" target="_blank" class="text-[#a50101]">repo</a></p>
    </footer>
  `
}

document.getElementById('app').innerHTML = App()
console.log('IT WORKS!')
