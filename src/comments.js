/* eslint-disbale import/no-cycle */
import { pokeCall } from './apiCall.js';
import close from './cancel.png';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/comments';

const postCom = async (e) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(e),
  });
  return response.json();
};

async function getCom() {
  const response = await fetch(baseURL);
  return response.json();
}

const commentWindow = document.getElementById('comment-window');

const displayPokemonStats = (e) => {
  pokeCall(e).then((poke) => {
    const pokeImg = poke.sprites.front_shiny;
    const pokeTypeOne = poke.types[0].type.name;
    const pokeName = poke.name;
    const pokeWeight = poke.weight;
    const pokeHeight = poke.height;
    const pokePower = poke.base_experience;

    const cancelImage = document.createElement('img');
    cancelImage.width = '48';
    cancelImage.src = close;
    const img = document.createElement('img');
    img.src = pokeImg;
    img.width = '160';
    const name = document.createElement('h2');
    name.innerText = pokeName[0].toUpperCase() + pokeName.slice(1);
    const type = document.createElement('p');
    type.innerText = `Type: ${pokeTypeOne[0].toUpperCase() + pokeTypeOne.slice(1)}`;
    const weight = document.createElement('p');
    weight.innerText = `Weight: ${pokeWeight} lbs`;
    const height = document.createElement('p');
    height.innerText = `Height: ${pokeHeight} ft`;
    const power = document.createElement('p');
    power.innerText = `Power: ${pokePower} pts`;

    commentWindow.appendChild(img);
    commentWindow.appendChild(cancelImage);
    commentWindow.appendChild(name);
    commentWindow.appendChild(type);
    commentWindow.appendChild(weight);
    commentWindow.appendChild(height);
    commentWindow.appendChild(power);

    cancelImage.addEventListener('click', () => {
      if (commentWindow.style.display === 'block') {
        commentWindow.style.display = 'none';
        commentWindow.innerHTML = '';
      }
    });
  });
};

const toggle = (id) => {
  if (commentWindow.style.display === 'none') {
    commentWindow.style.display = 'block';
    displayPokemonStats(id);
  } else {
    commentWindow.style.display = 'none';
    commentWindow.innerHTML = '';
  }
};

export {
  postCom, getCom, displayPokemonStats, toggle,
};
