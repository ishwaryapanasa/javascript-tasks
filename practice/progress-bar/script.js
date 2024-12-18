// Selecting elements correctly
let toast = document.querySelector("#toast");
let toastMessage = toast.querySelector(".toast-message");
let toastProg = toast.querySelector(".progress-bar");

let success = document.querySelector(".successBtn");
let error = document.querySelector(".errorBtn");
let invalid = document.querySelector(".invalidBtn");

let interval; // Declare the interval variable globally

// Function to show toast
function showToast(message, type) {
  // Clear any existing interval to prevent stacking
  clearInterval(interval);

  toast.style.display = "block"; // Show toast
  toast.className = "toast " + type; // Add the type class for color
  toastMessage.textContent = message; // Set message

  // Reset progress bar and show
  toastProg.style.width = "100%";
  let progress = 100;

  // Decrease progress over time
  interval = setInterval(() => {
    progress -= 1;
    toastProg.style.width = progress + "%";

    if (progress <= 0) {
      // clearInterval(interval);
      toast.style.display = "none"; // Hide the toast when progress ends
    }
  }, 30); // Decrease progress every 30ms
}

// Event listeners for buttons
success.addEventListener("click", () => showToast("Success! Operation completed.", "success"));
error.addEventListener("click", () => showToast("Error! Something went wrong.", "error"));
invalid.addEventListener("click", () => showToast("Invalid input! Please try again.", "invalid"));
