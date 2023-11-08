import { getUser } from '../scripts/services/user.js';
import { getRepositories } from './services/repositories.js';
import { getEvents } from './services/events.js';

import { userO } from '../scripts/objects/userO.js';
import { screen } from '../scripts/objects/screen.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return;
        getUserData(userName);
    };
});

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub');
        return true;
    };
};

async function getUserData(userName) {
    const userResponse = await getUser(userName);

    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    };

    const repositoriesResponse = await getRepositories(userName);

    const eventsResponse = await getEvents(userName);

    userO.setInfo(userResponse);
    userO.setRepositories(repositoriesResponse);
    userO.setEvents(eventsResponse);

    screen.renderUser(userO);

    console.log(userO)
};