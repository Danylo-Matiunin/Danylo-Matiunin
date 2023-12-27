const clockContainer = document.querySelector('.clock');

setInterval(() => clockContainer.innerText = (new Date()).toLocaleTimeString('en-GB'), 1000);