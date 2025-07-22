// script.js - Updated random functionality

// Utility: get a random element from array function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Family Generator Data const firstNames = ['Alex','Sam','Taylor','Jordan','Morgan','Casey','Riley','Quinn','Jamie','Dakota']; const lastNames = ['Walker','Turner','Morgan','Carter','Bailey','Rivera','Campbell','Adams','Bennett','Parker']; const nationalities = ['American','Canadian','Japanese','French','Kenyan','Brazilian','Indian','Egyptian','Australian','Mexican']; const sexualities = ['Straight','Gay','Bi','Lesbian']; const childNames = ['Charlie','Max','Taylor','Jordan','Sam','Riley','Casey','Drew','Jamie','Dakota'];

// Generate a new random family function generateFamily() { const lastName = getRandom(lastNames); const parents = []; // Create two parents ['Male','Female'].forEach(gender => { const name = getRandom(firstNames) + ' ' + lastName; const age = Math.floor(Math.random() * 31) + 30; // 30-60 const nationality = getRandom(nationalities); const sexuality = getRandom(sexualities); parents.push({ name, age, gender, nationality, sexuality }); }); // Create 1-3 children const childCount = Math.floor(Math.random() * 3) + 1; const children = []; for (let i = 0; i < childCount; i++) { const gender = getRandom(['Male','Female']); const name = getRandom(childNames) + ' ' + lastName; const age = Math.floor(Math.random() * 13) + 5; // 5-17 children.push({ name, age, gender }); } // Render const output = document.getElementById('generator-output'); let html = <p><strong>Family: ${lastName}</strong></p><ul>; parents.forEach(p => { html += <li>${p.name}, ${p.age}yo, ${p.gender}, ${p.nationality}, ${p.sexuality}</li>; }); children.forEach(c => { html += <li>${c.name}, ${c.age}yo, ${c.gender} (Child)</li>; }); html += ''; output.innerHTML = html; }

// Chaos Feed const chaosEvents = [];

function logChaos(evt) { chaosEvents.unshift({ evt, time: new Date().toLocaleTimeString() }); renderChaos(); }

function renderChaos() { const c = document.getElementById('chaos-history'); c.innerHTML = chaosEvents.map(e => <p>[${e.time}] ${e.evt}</p>).join(''); }

function randomChaos() { const cloneNum = Math.floor(Math.random() * 1200) + 1; const templates = [ Clone #${cloneNum} seduced the SCR sensors., Dodgson clone #${cloneNum} tried vault entry., Clone #${cloneNum} rebooted network after butterfinger drop., Clone #${cloneNum} mislabeled vault as freezer causing confusion., Clone #${cloneNum} triggered simulated raptor breach. ]; const evt = getRandom(templates); logChaos(evt); }

// Guest Comments function submitGuestComment() { const inp = document.getElementById('guest-comment-input'); const log = document.getElementById('guest-comment-log'); if (inp.value.trim()) { const p = document.createElement('p'); p.textContent = Guest says: ${inp.value}; log.appendChild(p); inp.value = ''; } }

