
// Embedded character and family data
const characters = /* previously embedded characters array */ [];
const families = [
  "Santiago-Bauer: Valeria (39,F,Lesbian), Ava (38,F,Lesbian), Camila (12,F), Freya (8,F)",
  "Abebe: Desta (44,M,Straight), Nardos (43,F,Straight), Abrihet (14,F), Yared (9,M)",
  "Grant-Vazquez: Mason (41,M,Gay), Diego (39,M,Gay), Lucia (10,F)",
  "Obata: Kenji (36,M,Straight), Mai (34,F,Straight), Yuki (12,F), Daisuke (6,M)"
];

// Family generator
function generateFamily() {
  const pick = families[Math.floor(Math.random() * families.length)];
  document.getElementById('generator-output').textContent = `Family: ${pick}`;
}

// Chaos event logger
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
  logChaos(events[Math.floor(Math.random() * events.length)]);
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
