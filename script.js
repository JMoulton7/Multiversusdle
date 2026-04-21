// ================= DATA =================

const fighters = [
  { name: "Agent Smith", universe: "Matrix", class: "Bruiser", weight: "Medium", era: "Classic", gender: "Male" },
  { name: "Aquaman", universe: "DC", class: "Tank", weight: "Heavy", era: "Classic", gender: "Male" },
  { name: "Arya Stark", universe: "Game of Thrones", class: "Assassin", weight: "Light", era: "Classic", gender: "Female" },
  { name: "Banana Guard", universe: "Adventure Time", class: "Bruiser", weight: "Medium", era: "Modern", gender: "Male" },
  { name: "Batman", universe: "DC", class: "Bruiser", weight: "Light", era: "Classic", gender: "Male" },
  { name: "Betelgeuse", universe: "Beetlejuice", class: "Assassin", weight: "Medium", era: "Classic", gender: "Male" },
  { name: "Black Adam", universe: "DC", class: "Bruiser", weight: "Heavy", era: "Classic", gender: "Male" },
  { name: "Bugs Bunny", universe: "Looney Tunes", class: "Mage", weight: "Light", era: "Classic", gender: "Male" },
  { name: "Finn", universe: "Adventure Time", class: "Assassin", weight: "Light", era: "Modern", gender: "Male" },
  { name: "Garnet", universe: "Steven Universe", class: "Bruiser", weight: "Heavy", era: "Modern", gender: "Female" },
  { name: "Gizmo", universe: "Gremlins", class: "Mage", weight: "Light", era: "Classic", gender: "Male" },
  { name: "Harley Quinn", universe: "DC", class: "Assassin", weight: "Light", era: "Classic", gender: "Female" },
  { name: "Iron Giant", universe: "Iron Giant", class: "Tank", weight: "Heavy", era: "Classic", gender: "Male" },
  { name: "Jake", universe: "Adventure Time", class: "Bruiser", weight: "Medium", era: "Modern", gender: "Male" },
  { name: "Jason Voorhees", universe: "Friday the 13th", class: "Tank", weight: "Heavy", era: "Classic", gender: "Male" },
  { name: "LeBron James", universe: "Space Jam", class: "Bruiser", weight: "Heavy", era: "Recent", gender: "Male" },
  { name: "Lola Bunny", universe: "Looney Tunes", class: "Bruiser", weight: "Light", era: "Classic", gender: "Female" },
  { name: "Marceline", universe: "Adventure Time", class: "Bruiser", weight: "Light", era: "Modern", gender: "Female" },
  { name: "Marvin the Martian", universe: "Looney Tunes", class: "Mage", weight: "Light", era: "Classic", gender: "Male" },
  { name: "Morty", universe: "Rick and Morty", class: "Mage", weight: "Light", era: "Modern", gender: "Male" },
  { name: "Nubia", universe: "DC", class: "Assassin", weight: "Heavy", era: "Classic", gender: "Female" },
  { name: "Raven", universe: "DC", class: "Mage", weight: "Light", era: "Classic", gender: "Female" },
  { name: "Reindog", universe: "Player First Games", class: "Mage", weight: "Medium", era: "Recent", gender: "Male" },
  { name: "Rick", universe: "Rick and Morty", class: "Mage", weight: "Light", era: "Modern", gender: "Male" },
  { name: "Samurai Jack", universe: "Samurai Jack", class: "Bruiser", weight: "Medium", era: "Modern", gender: "Male" },
  { name: "Shaggy", universe: "Scooby-Doo", class: "Bruiser", weight: "Medium", era: "Classic", gender: "Male" },
  { name: "Steven Universe", universe: "Steven Universe", class: "Tank", weight: "Light", era: "Modern", gender: "Male" },
  { name: "Stripe", universe: "Gremlins", class: "Assassin", weight: "Light", era: "Classic", gender: "Male" },
  { name: "Superman", universe: "DC", class: "Tank", weight: "Heavy", era: "Classic", gender: "Male" },
  { name: "Taz", universe: "Looney Tunes", class: "Assassin", weight: "Light", era: "Classic", gender: "Male" },
  { name: "The Joker", universe: "DC", class: "Mage", weight: "Medium", era: "Classic", gender: "Male" },
  { name: "The Powerpuff Girls", universe: "Powerpuff Girls", class: "Assassin", weight: "Medium", era: "Classic", gender: "Female" },
  { name: "Tom and Jerry", universe: "Tom and Jerry", class: "Mage", weight: "Light", era: "Classic", gender: "Male" },
  { name: "Velma", universe: "Scooby-Doo", class: "Mage", weight: "Light", era: "Classic", gender: "Female" },
  { name: "Wonder Woman", universe: "DC", class: "Tank", weight: "Medium", era: "Classic", gender: "Female" }
];

const facts = {
  "Agent Smith": "The Matrix (Movie, 1999)",
  "Aquaman": "More Fun Comics #73 (1941)",
  "Arya Stark": "A Game of Thrones (Book, 1996)",
  "Banana Guard": "Adventure Time - 'Ricardio the Heart Guy' (2010)",
  "Batman": "Detective Comics #27 (1939)",
  "Betelgeuse": "Beetlejuice (Movie, 1988)",
  "Black Adam": "The Marvel Family #1 (1945)",
  "Bugs Bunny": "'A Wild Hare' (Short, 1940)",
  "Finn": "Adventure Time - 'Slumber Party Panic' (2010)",
  "Garnet": "Steven Universe - 'Gem Glow' (2013)",
  "Gizmo": "Gremlins (Movie, 1984)",
  "Harley Quinn": "Batman: TAS - 'Joker's Favor' (1992)",
  "Iron Giant": "The Iron Giant (Movie, 1999)",
  "Jake": "Adventure Time - 'Slumber Party Panic' (2010)",
  "Jason Voorhees": "Friday the 13th (Movie, 1980)",
  "LeBron James": "Space Jam: A New Legacy (2021)",
  "Lola Bunny": "Space Jam (Movie, 1996)",
  "Marceline": "Adventure Time - 'Evicted!' (2010)",
  "Marvin the Martian": "'Haredevil Hare' (Short, 1948)",
  "Morty": "Rick and Morty - 'Pilot' (2013)",
  "Nubia": "Wonder Woman #204 (1973)",
  "Raven": "DC Comics Presents #26 (1980)",
  "Reindog": "MultiVersus (Video Game, 2022)",
  "Rick": "Rick and Morty - 'Pilot' (2013)",
  "Samurai Jack": "Samurai Jack Episode I (2001)",
  "Shaggy": "Scooby-Doo - 'What a Night for a Knight' (1969)",
  "Steven Universe": "Steven Universe - 'Gem Glow' (2013)",
  "Stripe": "Gremlins (Movie, 1984)",
  "Superman": "Action Comics #1 (1938)",
  "Taz": "'Devil May Hare' (Short, 1954)",
  "The Joker": "Batman #1 (1940)",
  "The Powerpuff Girls": "Powerpuff Girls - 'Monkey See, Doggie Do' (1998)",
  "Tom and Jerry": "'Puss Gets the Boot' (Short, 1940)",
  "Velma": "Scooby-Doo - 'What a Night for a Knight' (1969)",
  "Wonder Woman": "All Star Comics #8 (1941)"
};

// ================= DAILY ANSWER =================

function getDailyIndex() {
  const today = new Date().toDateString();
  let hash = 0;

  for (let i = 0; i < today.length; i++) {
    hash = today.charCodeAt(i) + ((hash << 5) - hash);
  }

  return Math.abs(hash) % fighters.length;
}

const answer = fighters[getDailyIndex()];

// ================= GAME STATE =================

let guessedNames = [];
let guessCount = 0;
let gameOver = false;

// ================= COMPARE =================

function compareGuess(guess, answer) {
  return {
    universe: guess.universe === answer.universe ? "correct" : "wrong",
    class: guess.class === answer.class ? "correct" : "wrong",
    weight: guess.weight === answer.weight ? "correct" : "wrong",
    era: guess.era === answer.era ? "correct" : "wrong",
    gender: guess.gender === answer.gender ? "correct" : "wrong"
  };
}

// ================= SEARCH =================

function searchFighters(query) {
  return fighters.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );
}

// ================= AUTOCOMPLETE =================

const resultsList = document.getElementById("results");
const searchInput = document.getElementById("search");

function updateSearch() {
  const query = searchInput.value;
  const matches = searchFighters(query).slice(0, 5);

  resultsList.innerHTML = "";

  matches.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f.name;

    li.onclick = () => {
      makeGuess(f.name);
      resultsList.innerHTML = "";
      searchInput.value = "";
    };

    resultsList.appendChild(li);
  });
}

searchInput.addEventListener("input", updateSearch);

// ================= HEADERS WITH TOOLTIPS (Name has no tooltip) =================

function renderHeaders() {
  const container = document.getElementById("guesses");

  const headerRow = document.createElement("div");
  headerRow.className = "guess-row header-row";

  const headers = [
    { label: "Name", tooltip: null },  // No tooltip for Name
    { label: "Universe", tooltip: "The franchise or series the fighter originates from (DC, Adventure Time, Looney Tunes, etc.)" },
    { label: "Class", tooltip: "Assigned in-game class: Tank, Bruiser, Assassin, or Mage" },
    { label: "Weight", tooltip: "Light (below Velma) • Medium (Velma up to, not including LeBron) • Heavy (LeBron and above)" },
    { label: "Era", tooltip: "Classic (Pre-2000) • Modern (2000-2016) • Recent (2017-Current)" },
    { label: "Gender", tooltip: "As listed on the MultiVersus Fandom wiki" }
  ];

  headers.forEach(header => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = header.label;
    
    // Only add tooltip if it exists
    if (header.tooltip) {
      const tooltip = document.createElement("div");
      tooltip.className = "attr-tooltip multi-line";
      tooltip.textContent = header.tooltip;
      cell.appendChild(tooltip);
    }
    
    headerRow.appendChild(cell);
  });

  container.appendChild(headerRow);
}

// ================= RENDER ROW WITH ANIMATION =================

function renderGuessRow(guess, result) {
  const container = document.getElementById("guesses");

  const row = document.createElement("div");
  row.className = "guess-row new-guess";
  row.style.opacity = "0";
  row.style.transform = "translateY(-10px)";

  const nameCell = document.createElement("div");
  nameCell.className = "cell name-cell";
  nameCell.textContent = guess.name;
  row.appendChild(nameCell);

  const attributes = ["universe", "class", "weight", "era", "gender"];

  attributes.forEach(attr => {
    const cell = document.createElement("div");
    cell.className = `cell ${result[attr]}`;
    cell.textContent = guess[attr];
    row.appendChild(cell);
  });

  // Insert at top (right after the header row, which is the first child)
  if (container.children.length === 1) {
    container.appendChild(row);
  } else {
    container.insertBefore(row, container.children[1]);
  }

  // Trigger animation
  setTimeout(() => {
    row.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    row.style.opacity = "1";
    row.style.transform = "translateY(0)";
  }, 10);

  // Add subtle "hop" animation to existing rows
  const existingRows = Array.from(container.children).slice(2);
  existingRows.forEach((existingRow, index) => {
    existingRow.style.transition = "transform 0.25s ease";
    existingRow.style.transform = "translateY(5px)";
    setTimeout(() => {
      existingRow.style.transform = "translateY(0)";
    }, 50 + (index * 20));
  });
}

// ================= GUESS =================

function makeGuess(name) {
  if (gameOver) return;

  const guess = fighters.find(f => f.name === name);
  if (!guess) return;

  if (guessedNames.includes(name)) {
    document.getElementById("status").textContent = "Already guessed!";
    return;
  }

  guessedNames.push(name);
  guessCount++;

  const result = compareGuess(guess, answer);
  renderGuessRow(guess, result);

  document.getElementById("counter").textContent = `Guesses: ${guessCount}`;

  if (guess.name === answer.name) {
    gameOver = true;
    celebrateWin();
    const fact = facts[answer.name] || "No fact available.";
    document.getElementById("status").innerHTML =
      `🎉 Correct! It was <b>${answer.name}</b>!<br><br>
       🧠 First appearance: ${fact}<br><br>
       Solved in ${guessCount} guesses!`;
  }
}

function celebrateWin() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// ================= INIT =================

renderHeaders();