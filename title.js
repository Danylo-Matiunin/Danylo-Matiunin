const greetings = [
    'Вітаю',
    'Привіт',
    'З Новим роком'
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const headerTitle = document.querySelector('.passion-menu__logo');

function updateHeaderText() {
    headerTitle.innerText = getRandomItem(greetings);
}

setInterval(updateHeaderText, 1000);
