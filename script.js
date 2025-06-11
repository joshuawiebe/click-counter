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
    if (event.key.toLowerCase() === 'd') {
        document.body.classList.toggle('darkmode');
    }
});

// Settings modal logic
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.getElementById('closeModal');
const uiverseSwitch = document.getElementById('uiverseSwitch');

// Open modal
settingsButton.addEventListener('click', () => {
    settingsModal.classList.add('open');
    // Sync toggle with current dark mode
    uiverseSwitch.checked = document.body.classList.contains('darkmode');
});

// Close modal
closeModal.addEventListener('click', () => {
    settingsModal.classList.remove('open');
});
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) settingsModal.classList.remove('open');
});

// Toggle dark mode from Uiverse switch
uiverseSwitch.addEventListener('change', (e) => {
    document.body.classList.toggle('darkmode', e.target.checked);
});
