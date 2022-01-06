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

    // Stats Section

    const statsWindow = document.createElement('div');
    statsWindow.id = 'stats-window';
    const headSection = document.createElement('div');
    headSection.id = 'stats-section'
    const cancelImage = document.createElement('img');
    cancelImage.width = '48';
    cancelImage.src = close;
    cancelImage.id = 'close';
    const img = document.createElement('img');
    img.src = pokeImg;
    img.width = '160';
    img.id = 'photo';
    const name = document.createElement('h2');
    name.innerText = pokeName[0].toUpperCase() + pokeName.slice(1);
    const typeDiv = document.createElement('div');
    typeDiv.id = 'type-div';
    const type = document.createElement('p');
    type.id = 'type-tex'
    type.innerText = `${pokeTypeOne[0].toUpperCase() + pokeTypeOne.slice(1)}`;
    const weight = document.createElement('p');
    weight.innerText = `Weight: ${pokeWeight} lbs`;
    const height = document.createElement('p');
    height.innerText = `Height: ${pokeHeight} ft`;
    const power = document.createElement('p');
    power.innerText = `Power: ${pokePower} pts`;
    
    // Comment Section
    
    const commentSection = document.createElement('comments-section');
    commentSection.id = 'comment-section';
    commentSection.classList.add('comments-section');
    const titleComment = document.createElement('h3');
    titleComment.textContent = "Best Comments";
    const listComments = document.createElement('ul');
    listComments.classList.add('comments-list');
    listComments.style.display = 'none';
    const leaveComment = document.createElement('h3');
    leaveComment.textContent = "Add your comment";
    const formComments = document.createElement('form');
    formComments.classList.add('form-class');
    const nameComment = document.createElement('input');
    nameComment.classList.add('input-name');
    nameComment.placeholder = "Your name";
    nameComment.setAttribute("required", "");
    nameComment.required = true;   
    const textComment = document.createElement('textarea');
    textComment.classList.add('input-text');
    textComment.placeholder = "Your comment";
    textComment.setAttribute("required", "");
    textComment.required = true; 
    const btnSubmitComment = document.createElement('button');
    btnSubmitComment.setAttribute("type", "submit");
    btnSubmitComment.classList.add('send-comment');
    btnSubmitComment.textContent = "Send your comment";

    commentSection.appendChild(titleComment);
    commentSection.appendChild(listComments);
    commentSection.appendChild(leaveComment);
    commentSection.appendChild(formComments);
    formComments.appendChild(nameComment);
    formComments.appendChild(textComment);
    formComments.appendChild(btnSubmitComment);
    commentWindow.appendChild(statsWindow);
    
    headSection.appendChild(cancelImage);
    headSection.appendChild(img);
    statsWindow.appendChild(headSection);
    statsWindow.appendChild(name);
    typeDiv.appendChild(type);
    statsWindow.appendChild(typeDiv);
    statsWindow.appendChild(weight);
    statsWindow.appendChild(height);
    statsWindow.appendChild(power);
    statsWindow.appendChild(commentSection);
    
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
