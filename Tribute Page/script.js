// Change background color of the header on click
document.querySelector('header').addEventListener('click', function () {
    const header = document.querySelector('header');
    header.style.backgroundColor = getRandomColor();
});

// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
