// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the color box and the button using their IDs
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random hexadecimal color
    function getRandomColor() {
        // A hex color starts with a hash and is followed by 6 characters (0-9, A-F)
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        // Loop 6 times to pick 6 random characters from the 'letters' string
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }

    // Add a click event listener to the button
    changeColorBtn.addEventListener('click', () => {
        // When clicked, call getRandomColor() and apply it to the box's background color
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});
