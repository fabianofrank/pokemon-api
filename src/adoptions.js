import { pokeCall } from './apiCall.js';
import close from './cancel.png';

// POST and GET: Involment API
const APIKey = 'ntSEDKBSp5jVB8zr1TJB';
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const postCom = (objOption) => {
  const options = {
    method: `${objOption}`,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return options;
};

const postAsync = async (method, query, bodyObj) => {
  const url = `${baseURL}${APIKey}/${query}`;
  const options = postCom(method);
  options.body = JSON.stringify(bodyObj);
  const response = await fetch(url, options);
  if (method === 'POST') {
    return response.text();
  }
  return response.json();
};

const postComment = (commentObj) => postAsync('POST', 'reservations', commentObj);

async function getCom(e) {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/reservations?item_id=${e}`);
  return response.json();
}

const commentWindow = document.getElementById('comment-window');

// POPUP Close
const toggleClose = () => {
  if (commentWindow.style.display === 'block') {
    commentWindow.style.display = 'none';
    commentWindow.innerHTML = '';
    document.querySelector('#wrapper').style.visibility = 'visible';
  }
};

// RENDER Stats
const renderPokemonStats = (poke) => {
  const pokeImg = poke.sprites.front_default;
  const pokeTypeOne = poke.types[0].type.name;
  const pokeName = poke.name.toUpperCase();
  const pokeWeight = poke.weight;
  const pokeHeight = poke.height;
  const pokePower = poke.base_experience;

  let html = '';
  const htmlSegment = `
  <div id="stats-window">
    <div id="stats-section">
      <img src="${close}" id="close" width="48">
      <img src="${pokeImg}" id="photo" width="160">
    </div>
    <h2>${pokeName}</h2>
    <div id="type-div">
      <p id="type-tex">${pokeTypeOne}</p>
    </div>
    <p>Weight: ${pokeWeight}</p>
    <p>Height: ${pokeHeight}</p>
    <p>Power: ${pokePower}</p>
    <comments-section id="comment-section" class="comments-section">
      <div class="comment-header">
        <h3>Adoptions</h3>
        <p id="adopt"></p>
      </div>
      <div class="comments-list"></div>
      <h3>Schedule your adoption</h3>
      <form class="form-class">
        <input class="input-name" placeholder="Your name" required="">
        <p>Traning Start</p>
        <input type="date" class="input-start" placeholder="When will you meet your Pokemon?" required="">
        <p>Traning Finished</p>
        <input type="date" class="input-end" placeholder="When will you meet your Pokemon?" required="">
        <button type="button" class="send-comment">Book your adoption</button>
      </form>
    </comments-section>
  </div>
  `;
  html += htmlSegment;
  commentWindow.innerHTML = html;

  // COUNTER
  const counter = (serverData) => {
    const adopt = document.querySelector('#adopt');
    adopt.innerHTML = `(${serverData.length})`;
  };

  // GET and DISPLAY comments
  const getComment = (e) => {
    getCom(e)
      .then((serverData) => {
        let html = '';
        if (typeof serverData === 'object') {
          counter(serverData);
          serverData.forEach((data) => {
            const htmlSegment = `<p>${data.date_start} - ${data.date_end} by ${data.username}</p>`;
            html += htmlSegment;
          });
        } else if (typeof serverData === 'object' && serverData.error.status === 400) {
          const htmlSegment = 'No comments yet';
          html += htmlSegment;
        }
        const container = document.querySelector('.comments-list');
        container.innerHTML = html;
      });
  };

  // RENDER comments
  getComment(poke.id);

  const renderComment = (e) => {
    getComment(e);
  };

  // CLICK EVENT
  const start = document.querySelector('.input-start');
  const end = document.querySelector('.input-end');
  const name = document.querySelector('.input-name');

  const handleClick = async () => {
    const bodyObj = {
      item_id: poke.id,
      username: name.value,
      date_start: start.value,
      date_end: end.value,
    };
    postComment(bodyObj).then(() => {
      renderComment(poke.id);
    });
  };

  document.querySelector('.send-comment').addEventListener('click', handleClick);
  document.getElementById('close').addEventListener('click', toggleClose);
};

// Display Pokemon: PokeAPI
const displayPokemonStats = (e) => {
  pokeCall(e).then((poke) => {
    renderPokemonStats(poke);
  });
};

// OPEN POPUP
const adoptToggle = (id) => {
  if (commentWindow.style.display === 'none') {
    commentWindow.style.display = 'block';
    document.querySelector('#wrapper').style.visibility = 'hidden';
    displayPokemonStats(id);
  } else {
    commentWindow.style.display = 'none';
    commentWindow.innerHTML = '';
  }
};

export {
  postCom, getCom, displayPokemonStats, adoptToggle,
};
