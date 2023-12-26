const greetings = ['qew', 'fdgv', 'gfd', 'fdgf'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const headerTitle = document.querySelector('.passion-menu__logo');

function updateHeaderText() {
    headerTitle.innerText = getRandomItem(greetings);
}

setInterval(updateHeaderText, 1000);

const clockContainer = document.querySelector('.clock');

setInterval(() => clockContainer.innerText = (new Date()).toLocaleTimeString('en-GB'), 1000);

