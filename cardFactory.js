export function createSimpleCard(idx = 1) {
  const card = document.createElement('article');
  card.className = 'card pop-in';
  card.innerHTML = `
    <span class="chip">CARD</span>
    <h3>Dynamic Card #${idx}</h3>
    <p>Made with <code>createElement</code> + <code>appendChild</code>.</p>
    <div class="actions">
      <button class="btn-delete" type="button">Delete</button>
    </div>
  `;
  attachDelete(card);
  attachTilt(card);
  return card;
}

export function createProfileCard({ name, role }) {
  const safeName = escapeHtml(name || 'Unknown');
  const safeRole = escapeHtml(role || 'Learner');

  const card = document.createElement('article');
  card.className = 'card pop-in';
  card.innerHTML = `
    <span class="chip">PROFILE</span>
    <h3>${safeName}</h3>
    <p>Role: <strong>${safeRole}</strong></p>
    <div class="actions">
      <button class="btn-delete" type="button" aria-label="Remove ${safeName}">Remove</button>
    </div>
  `;
  attachDelete(card);
  attachTilt(card);
  return card;
}

function attachDelete(cardEl) {
  const delBtn = cardEl.querySelector('.btn-delete');
  delBtn?.addEventListener('click', () => cardEl.remove());
}

function attachTilt(cardEl) {
  const strength = 10;
  function onMove(e) {
    const rect = cardEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    cardEl.style.transform = `perspective(800px) rotateY(${dx * strength}deg) rotateX(${-dy * strength}deg)`;
  }
  function reset() {
    cardEl.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  }
  cardEl.addEventListener('mousemove', onMove);
  cardEl.addEventListener('mouseleave', reset);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]+/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
  })[s]);
}
