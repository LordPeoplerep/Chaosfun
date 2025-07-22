
// Load characters from JSON and enable character generator
async function loadCharacters() {
  const response = await fetch('characters.json');
  return await response.json();
}

async function generateCharacter() {
  try {
    const characters = await loadCharacters();
    const pick = characters[Math.floor(Math.random() * characters.length)];
    const output = document.getElementById('character-output');
    if (output) {
      output.textContent = `Name: ${pick.name}, Age: ${pick.age}, Gender: ${pick.gender}, Role: ${pick.role}`;
    }
  } catch (error) {
    console.error("Failed to load characters:", error);
  }
}

// Chaos event logger
const chaosEvents = [];
function logChaos(event) {
  chaosEvents.push({ event, time: new Date().toLocaleTimeString() });
  renderChaos();
}

function renderChaos() {
  const container = document.getElementById('chaos-history');
  if (container) {
    container.innerHTML = chaosEvents.map(e => `<p>[${e.time}] ${e.event}</p>`).join('');
  }
}

function randomChaos() {
  const events = [
    "Malcom seduced the SCR sensors.",
    "Dodgson clone tried vault entry.",
    "Clone #07 rebooted network after butterfinger drop.",
    "Vault labeled as freezer caused confusion.",
    "Simulated raptor breach executed."
  ];
  const event = events[Math.floor(Math.random() * events.length)];
  logChaos(event);
}

// Guest comments
function submitGuestComment() {
  const input = document.getElementById('guest-comment-input');
  const log = document.getElementById('guest-comment-log');
  if (input && input.value.trim() !== "") {
    const comment = document.createElement('p');
    comment.textContent = `Guest says: ${input.value}`;
    log.appendChild(comment);
    input.value = "";
  }
}
