let counter = 0;
const displayCounter = document.getElementById('counter');
const counterButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.getElementById('closeModal');
const uiverseSwitch = document.getElementById('uiverseSwitch');

// ------------------------------
// LocalStorage Helpers
// ------------------------------
function saveCounter() {
    localStorage.setItem('counter', counter.toString());
}

function loadCounter() {
    const stored = localStorage.getItem('counter');
    return stored ? parseInt(stored, 10) : 0;
}

function saveDarkModeSetting(isDark) {
    localStorage.setItem('darkmode', isDark ? 'true' : 'false');
}

function loadDarkModeSetting() {
    return localStorage.getItem('darkmode') === 'true';
}

// ------------------------------
// Counter Display
// ------------------------------
function updateCounterDisplay() {
    if (counter < 10) {
        displayCounter.textContent = '0' + counter;
        displayCounter.style.color = 'red';
    } else {
        displayCounter.textContent = counter;
        displayCounter.style.color = 'green';
    }
}

// ------------------------------
// Theme
// ------------------------------
function setCounterColorByMode() {
    if (document.body.classList.contains('darkmode')) {
        displayCounter.style.color = '#fff';
    } else {
        displayCounter.style.color = '#111';
    }
}

function toggleDarkMode(fromSwitch = false) {
    const isDark = document.body.classList.toggle('darkmode');
    setCounterColorByMode();
    saveDarkModeSetting(isDark);

    if (!fromSwitch) {
        uiverseSwitch.checked = isDark;
    }
}

// ------------------------------
// Initialization
// ------------------------------
counter = loadCounter();
updateCounterDisplay();

document.body.classList.toggle('darkmode', loadDarkModeSetting());
uiverseSwitch.checked = loadDarkModeSetting();
setCounterColorByMode();

// ------------------------------
// Button Events
// ------------------------------
counterButton.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
    saveCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    displayCounter.textContent = '00';
    setCounterColorByMode();
    saveCounter();
});

settingsButton.addEventListener('click', () => {
    settingsModal.classList.add('open');
    uiverseSwitch.checked = document.body.classList.contains('darkmode');
});

closeModal.addEventListener('click', () => {
    settingsModal.classList.remove('open');
});

settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.remove('open');
    }
});

uiverseSwitch.addEventListener('change', () => {
    toggleDarkMode(true);
});

// ------------------------------
// Keyboard Shortcuts
// ------------------------------
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (event.code === 'Space') {
        event.preventDefault();
        counter++;
        updateCounterDisplay();
        saveCounter();
        return;
    }

    if (key === 'escape') {
        if (settingsModal.classList.contains('open')) {
            settingsModal.classList.remove('open');
        } else {
            counter = 0;
            displayCounter.textContent = '00';
            setCounterColorByMode();
            saveCounter();
        }
        return;
    }

    if (key === 'enter') {
        counter = 0;
        displayCounter.textContent = '00';
        setCounterColorByMode();
        saveCounter();
        return;
    }

    if (key === 'd') {
        toggleDarkMode();
        return;
    }

    if (key === 's') {
        const isOpen = settingsModal.classList.toggle('open');
        if (isOpen) {
            uiverseSwitch.checked = document.body.classList.contains('darkmode');
        }
        return;
    }
    
    if (key === 'r') {
        counter = 0;
        displayCounter.textContent = '00';
        setCounterColorByMode();
        saveCounter();
        return;
    }

    if (key === 'c') {
        counter = counter + 101;
        updateCounterDisplay();
        saveCounter();
        return;
    }
});
