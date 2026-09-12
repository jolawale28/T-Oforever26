// ===============================
// T'O FOREVER '26 — EASY EDITS
// ===============================
// Change these values and save.
// Date format: YYYY-MM-DDTHH:MM:SS
const WEDDING_DATE = "2026-11-28T11:00:00";

// Countdown
function updateCountdown(){
  const target = new Date(WEDDING_DATE).getTime();
  const now = Date.now();
  const diff = Math.max(0, target-now);
  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor(diff/(1000*60*60))%24;
  const m = Math.floor(diff/(1000*60))%60;
  const s = Math.floor(diff/1000)%60;
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("minutes").textContent=String(m).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s).padStart(2,"0");
}
setInterval(updateCountdown,1000); updateCountdown();

// Mobile menu
document.getElementById("menuBtn").addEventListener("click",()=>{
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  document.getElementById("navLinks").classList.remove("open");
}));

// Demo RSVP
document.getElementById("rsvpForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const msg=document.getElementById("formMessage");
  msg.textContent="Thank you! Your RSVP has been recorded in this demo. Connect a form service/backend before publishing.";
  e.target.reset();
});

// Optional music hook.
// Add an audio file at audio/music.mp3 and uncomment the lines below.
// const audio = new Audio("audio/music.mp3");
// audio.loop=true;
// document.getElementById("musicControl").onclick=()=>{
//   if(audio.paused) audio.play(); else audio.pause();
// };
