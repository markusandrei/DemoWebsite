// Function to move the button to a random position within the main element
function moveButton() {
    // Get the main element's dimensions and position
    const main = document.querySelector('main');
    const mainRect = main.getBoundingClientRect();

    // Get the button element
    const button = document.getElementById("random-move-btn");

    // Calculate the maximum possible x and y positions for the button
    const maxX = mainRect.width - button.offsetWidth;
    const maxY = mainRect.height - button.offsetHeight;

    // Generate random positions within the allowed range
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Set the button's new position relative to the main element
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Add event listener to move the button on click
document.getElementById("random-move-btn").addEventListener("click", moveButton);
