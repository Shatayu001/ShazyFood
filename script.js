// JavaScript Animation for Color-Changing Text

let colorChangingText = document.getElementById('color-changing');

setInterval(() => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorChangingText.style.color = `#${randomColor}`;
}, 2000);
