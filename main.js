import greet, { add, multiply } from './mathUtils.js';
import { createProfileCard, createSimpleCard } from './modules/cardFactory.js';

const btnCreateCard = document.getElementById('btnCreateCard');
const btnAddProfile = document.querySelector('#btnAddProfile');
const btnShowMath   = document.querySelector('#btnShowMath');
const cardContainer = document.querySelector('#cardContainer');
const mathOutput    = document.querySelector('#mathOutput');

mathOutput.textContent = greet('Riyaz');

let cardCount = 0;
btnCreateCard.addEventListener('click', () => {
  cardCount += 1;
  const card = createSimpleCard(cardCount);
  cardContainer.appendChild(card);
});

btnShowMath.addEventListener('click', () => {
  const a = 7, b = 6;
  const sum = add(a, b);
  const prod = multiply(a, b);
  mathOutput.innerHTML = `Using <code>mathUtils</code>: ${a} + ${b} = <strong>${sum}</strong> &nbsp; • &nbsp; ${a} × ${b} = <strong>${prod}</strong>`;
});

btnAddProfile.addEventListener('click', () => {
  const name = prompt('Enter Name:');
  if (name === null) return;

  const role = prompt('Enter Role:');
  if (role === null) return;

  const card = createProfileCard({ name: name.trim(), role: role.trim() });
  cardContainer.appendChild(card);
});
