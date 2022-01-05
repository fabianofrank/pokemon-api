import { pokeCall } from './apiCall.js';
import close from './cancel.png';
import { Pokedex, myPokedex, examplePokeArr } from './index.js';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/comments'

const postCom = async (e) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(e),
  });
  return response.json();
}

async function getCom() {
  const response = await fetch(baseURL);
  return response.json();
}

const commentWindow = document.getElementById('comment-window');

const toggle = (id) => {
  const statsWindow = document.getElementById('comment-window');
  console.log(statsWindow);
  if (statsWindow.style.display === 'block') {
    statsWindow.style.display = 'none';
    statsWindow.innerHTML = '';
  } else {
    statsWindow.style.display = 'block';
    displayPokemonStats(id);
  }
}

const displayPokemonStats = (e) => {
  pokeCall(e).then((poke) => {
    let pokeImg = poke.sprites.front_shiny;
    let pokeTypeOne = poke.types[0].type.name;
    let pokeName = poke.name;
    let pokeWeight = poke.weight;
    let pokeHeight = poke.height;
    let pokePower = poke.base_experience;
    
    const cancelImage = document.createElement('img');
    cancelImage.width = '48';
    cancelImage.src = close;
    const img  = document.createElement('img');
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
    
    cancelImage.addEventListener('click', toggle);
  });
};


export { postCom, getCom, displayPokemonStats, toggle };
