let playBtn = document.querySelector("#playBtn");
let audioPlayer = document.querySelector("#audioPlayer");
let progressBar = document.querySelector(".progress");
let progressDot = document.querySelector(".progress-dot");

let isPlaying = false; // Tracks whether the song is playing
let progress = 0; // Keeps track of the progress bar

// Function to update the progress bar based on audio playback
function updateProgress() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  // Calculate the progress percentage
  progress = (currentTime / duration) * 100;

  // Update the progress bar and the dot
  progressBar.style.width = `${progress}%`;
  progressDot.style.left = `${progress}%`;

  // If the song finishes, reset the play button to play icon
  if (currentTime === duration) {
    isPlaying = false;
    playBtn.classList.remove("paused");
  }
}

// Play/Pause Toggle
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    // Pause the song
    audioPlayer.pause();
    playBtn.classList.remove("paused"); // Switch to play icon
  } else {
    // Play the song
    audioPlayer.play();
    playBtn.classList.add("paused"); // Switch to pause icon

    // Update the progress bar as the song plays
    setInterval(updateProgress, 100); // Update progress every 100ms
  }

  // Toggle the isPlaying state
  isPlaying = !isPlaying;
});
