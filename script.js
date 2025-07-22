
// Load characters and provide generator
async function loadCharacters() {
  const resp = await fetch('data/characters.json');
  return await resp.json();
}

async function generateCharacter() {
  const chars = await loadCharacters();
  const pick = chars[Math.floor(Math.random() * chars.length)];
  document.getElementById('character-output').textContent = `${pick.name}, ${pick.role}`;
}

const chaosEvents = [];
function logChaos(event) {
  chaosEvents.push({ event, time: new Date().toLocaleTimeString() });
  renderChaos();
}

function renderChaos() {
  const container = document.getElementById('chaos-history');
  container.innerHTML = chaosEvents.map(e => `<p>[${e.time}] ${e.event}</p>`).join('');
}

function randomChaos() {
  const events = [
    "Malcom seduced the SCR sensors.",
    "Dodgson clone tried vault entry.",
    "Clone #07 rebooted network after butterfinger drop.",
    "Vault labeled as freezer caused confusion.",
    "Simulated raptor breach executed."
  ];
  const e = events[Math.floor(Math.random() * events.length)];
  logChaos(e);
}
