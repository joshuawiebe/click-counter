let counter = 0;
const displayCounter = document.getElementById('counter');
const counterButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

counterButton.addEventListener('click', () => {
    counter++;
    if (counter < 10) {
        displayCounter.textContent = '0' + counter;
        displayCounter.style.color = 'red';
    } else {
        displayCounter.textContent = counter;
        displayCounter.style.color = 'green';
    }
});

resetButton.addEventListener('click', () => {
    counter = 0;
    displayCounter.textContent = '00';
    displayCounter.style.color = 'white'; // Reset color
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        counter++;
        if (counter < 10) {
            displayCounter.textContent = '0' + counter;
            displayCounter.style.color = 'red';
        } else {
            displayCounter.textContent = counter;
            displayCounter.style.color = 'green';
        }
    }
    if (event.code === 'Escape' || event.code === 'Enter') {
        counter = 0;
        displayCounter.textContent = '00';
        displayCounter.style.color = 'black'; // Reset color
    }
    if (event.code === 'KeyD') {
        document.body.classList.toggle('darkmode');
    }
});
