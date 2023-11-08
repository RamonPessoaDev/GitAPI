import { baseUrl } from '/src/scripts/variables.js';

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`);
    return await response.json();
};

export { getEvents };    
    
// https://api.github.com/users/tater/events

// eventos nos ultimos 90 dias apenas

//https://api.github.com/users/USERNAME/events

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'YOUR-TOKEN'
//   })
  
//   await octokit.request('GET /events', {
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })