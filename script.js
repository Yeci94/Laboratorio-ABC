
const colors = ['green', 'blue', 'red'];


function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColorOnClick() {
    const h5Elements = document.querySelectorAll('h5.random-color');
    h5Elements.forEach(element => {
        element.addEventListener('click', () => {
            
            element.style.color = getRandomColor();
        });
    });
}


document.addEventListener('DOMContentLoaded', changeColorOnClick);
