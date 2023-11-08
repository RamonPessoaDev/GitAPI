const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                                    <div class="data-bio-login">
                                                        <h2>Bio:</h2>
                                                        <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                                        <h2>Login:</h2>
                                                        <h3>${user.userName ?? 'Não possui bio cadastrada 😢'}</h3>
                                                    </div>
                                            </div>
                                            <div class="info-follows">
                                                <h2>💻Seguidores:</h2>
                                                <h3>${user.followers ?? 'Não possui seguidores '}</h3>
                                                <h2>👥Seguindo:</h2>
                                                <h3>${user.following ?? 'Não está seguindo nada/ninguém '}</h3>
                                            </div>
                                      </div>`;

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                        <div class="inforepo">
                                                                            <p>🍴 ${repo.forks}</p>
                                                                            <p>⭐ ${repo.stargazers_count}</p>
                                                                            <p>👀 ${repo.watchers}</p>
                                                                            <p>👨‍💻 ${repo.language}</p>
                                                                        </div>
                                                                    </a>
                                                                </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section"> 
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        } else {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${'Não Possui Repositorios! 😢'}</ul>
                                            </div>`
        }

        let eventUser = '';
        user.events.forEach(event => eventUser += `<li>
                                                                    <a href="${event.html_url}" target="_blank">${event.name}
                                                                        <div class="events section">
                                                                            <p>🕶 ${event[0]}</p>
                                                                        </div>
                                                                    </a>
                                                                </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="events section"> 
                                                <h2>Eventos</h2>
                                                <ul>${eventUser}</ul>
                                           </div>`
        } else {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Repositórios</h2>
                                                <ul>${'Não Possui Repositorios! 😢'}</ul>
                                            </div>`
        }
    },
};

export { screen };