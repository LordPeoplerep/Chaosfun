
// Utility
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Family Generator Data (omitted for brevity in this snippet)

// Chaos event logger
const chaosEvents = [];
function logChaos(evt) {
  chaosEvents.unshift({ evt, time: new Date().toLocaleTimeString() });
  renderChaos();
}
function renderChaos() {
  const c = document.getElementById('chaos-history');
  c.innerHTML = chaosEvents.map(e => `<p>[${e.time}] ${e.evt}</p>`).join('');
}

// Random Chaos with Clone Number
function randomChaos() {
  const cloneNum = Math.floor(Math.random() * 1200) + 1;
  const events = [
    `Clone #${cloneNum} seduced the SCR sensors.`,
    `Dodgson clone #${cloneNum} tried vault entry.`,
    `Clone #${cloneNum} rebooted network after butterfinger drop.`,
    `Clone #${cloneNum} mislabeled vault as freezer causing confusion.`,
    `Clone #${cloneNum} triggered simulated raptor breach.`
  ];
  const evt = getRandom(events);
  logChaos(evt);
}

// Guest comments
function submitGuestComment() {
  const inp = document.getElementById('guest-comment-input');
  const log = document.getElementById('guest-comment-log');
  if (inp.value.trim()) {
    const p = document.createElement('p');
    p.textContent = `Guest says: ${inp.value}`;
    log.appendChild(p);
    inp.value = '';
  }
}

// Family Generator (omitted)
