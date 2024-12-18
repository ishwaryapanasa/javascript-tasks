// Select elements
const textInput = document.getElementById('textInput');
const voiceSelect = document.getElementById('voiceSelect');
const playButton = document.getElementById('playButton');
let timer=document.querySelector('#time');

let voices = [];

// Load available voices and populate the dropdown
function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

// Speak the text using the selected voice
function speakText() {
  const text = textInput.value;
  if (!text) return; // Don't proceed if text area is empty

  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = voices[voiceSelect.value];
  utterance.voice = selectedVoice;

  speechSynthesis.speak(utterance);
}

// Load voices when the page is loaded and when voices are updated
window.addEventListener('load', () => {
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }
});

// Add event listener to the play button
playButton.addEventListener('click', speakText);


//  setTimeout(() => {
//     timering();
//  },5000)

 function timering()
 {
    let time = new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    timer.innerText=`${hours}:${minutes}:${seconds}`;
 } 
 setInterval(() => {
    timering();  
 }, 1000);