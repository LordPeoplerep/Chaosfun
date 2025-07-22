
// Embedded character data
const characters = [{"name": "Dennis Nedry", "age": 38, "gender": "Male", "nationality": "American", "role": "Original Clone Template"}, {"name": "Ian Malcolm", "age": 45, "gender": "Male", "nationality": "American", "role": "Chaos Theorist; SCR-restricted"}, {"name": "Yasmin Toumi", "age": 33, "gender": "Female", "nationality": "Algerian-French", "role": "Biotech Developer"}, {"name": "Ram\u00f3n Vega", "age": 36, "gender": "Male", "nationality": "Spanish", "role": "Lab Supervisor"}];

// Character generator using embedded data
function generateCharacter() {
  const pick = characters[Math.floor(Math.random() * characters.length)];
  const output = document.getElementById('character-output');
  if (output) {
    output.textContent = `Name: ${pick.name}, Age: ${pick.age}, Gender: ${pick.gender}, Role: ${pick.role}`;
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
