// ===== ORA ATTUALE =====
function updateCurrentTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent =
    now.toLocaleTimeString("it-IT");
}

// ===== ATTIVAZIONE (-10 MINUTI) =====
const now = new Date();
const activatedDate = new Date(now.getTime() - 10 * 60 * 1000);
const issuedDate = new Date(now.getTime() - 11 * 60 * 1000);

function formatDateTime(date, withSeconds = true) {
  const d = date.toLocaleDateString("it-IT");
  const t = date.toLocaleTimeString("it-IT", {
    hour: '2-digit',
    minute: '2-digit',
    second: withSeconds ? '2-digit' : undefined
  });
  return `${d} ${t}`;
}

document.getElementById("activatedAt").textContent =
  formatDateTime(activatedDate);

document.getElementById("issuedAt").textContent =
  formatDateTime(issuedDate, false);

// ===== TIMER RIMANENTE (1:30:00) =====
let remainingSeconds = 1 * 60 * 60 + 30 * 60;

function updateRemainingTime() {
  const h = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(remainingSeconds % 60).padStart(2, '0');

  document.getElementById("remainingTime").textContent = `${h}:${m}:${s}`;

  if (remainingSeconds > 0) remainingSeconds--;
}

// ===== ACCORDION CONTROLLO E VALIDAZIONE =====
const toggleHeader = document.getElementById("toggleCard");
const content = document.getElementById("cardContent");
const arrow = document.getElementById("arrow");

toggleHeader.addEventListener("click", () => {
  content.classList.toggle("closed");
  arrow.classList.toggle("closed");
});

// ===== AVVIO =====
updateCurrentTime();
updateRemainingTime();

setInterval(updateCurrentTime, 1000);
setInterval(updateRemainingTime, 1000);
