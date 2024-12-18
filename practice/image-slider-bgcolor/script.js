// JavaScript to handle the slider and background color change
const slider = document.getElementById('slider');
const imageBox = document.querySelector('.image-box');
const imageContainer = document.querySelector('img');

slider.addEventListener('input', () => {
    const value = slider.value; // Get the slider value (0 to 100)

    // Map the slider value to a color (RGB)
    const red = 255 - (value * 2); // Red decreases with the slider value
    const green = 200 + (value * 0.5); // Green slightly increases
    const blue = 200 + (value * 0.5); // Blue slightly increases

    // Apply the new background color
    imageBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Adjust the image grayscale based on slider position
    imageBox.querySelector('img').style.filter = `grayscale(${100 - value}%)`;
});
