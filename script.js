let counter = 0;
const displayCounter = document.getElementById('counter');
const counterButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.getElementById('closeModal');
const uiverseSwitch = document.getElementById('uiverseSwitch');

// --- Persistence Helpers ---
function saveDarkModeSetting(isDark) {
    localStorage.setItem('darkmode', isDark ? 'true' : 'false');
}

function loadDarkModeSetting() {
    return localStorage.getItem('darkmode') === 'true';
}

function saveCounter() {
    localStorage.setItem('counter', counter.toString());
}

function loadCounter() {
    const stored = localStorage.getItem('counter');
    return stored ? parseInt(stored, 10) : 0;
}

// --- UI Update Helpers ---
function updateCounterDisplay() {
    if (counter < 10) {
        displayCounter.textContent = '0' + counter;
        displayCounter.style.color = 'red';
    } else {
        displayCounter.textContent = counter;
        displayCounter.style.color = 'green';
    }
}

function setCounterColorByMode() {
    if (document.body.classList.contains('darkmode')) {
        displayCounter.style.color = '#fff';
    } else {
        displayCounter.style.color = '#111';
    }
}

// --- Initialization ---
counter = loadCounter();
document.body.classList.toggle('darkmode', loadDarkModeSetting());
updateCounterDisplay();
setCounterColorByMode();
uiverseSwitch.checked = loadDarkModeSetting();

// --- Event Listeners ---

// Click button
counterButton.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
    saveCounter();
});

// Reset button
resetButton.addEventListener('click', () => {
    counter = 0;
    displayCounter.textContent = '00';
    setCounterColorByMode();
    saveCounter();
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        counter++;
        updateCounterDisplay();
        saveCounter();
    }
    if (event.code === 'Escape' || event.code === 'Enter') {
        counter = 0;
        displayCounter.textContent = '00';
        setCounterColorByMode();
        saveCounter();
    }
    if (event.key.toLowerCase() === 'd') {
        const isDark = document.body.classList.toggle('darkmode');
        setCounterColorByMode();
        saveDarkModeSetting(isDark);
        uiverseSwitch.checked = isDark;
    }
});

// Settings modal
settingsButton.addEventListener('click', () => {
    settingsModal.classList.add('open');
    uiverseSwitch.checked = document.body.classList.contains('darkmode');
});

closeModal.addEventListener('click', () => {
    settingsModal.classList.remove('open');
});

settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) settingsModal.classList.remove('open');
});

// Dark mode toggle via UI switch
uiverseSwitch.addEventListener('change', (e) => {
    const isDark = e.target.checked;
    document.body.classList.toggle('darkmode', isDark);
    setCounterColorByMode();
    saveDarkModeSetting(isDark);
});
