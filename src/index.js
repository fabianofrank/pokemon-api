/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
import './style.css';
import { pokeCall } from './apiCall.js';
// import Pokeball from './pokeball.png';

// class Pokecard {
//   constructor(name, img, weight, height, power, id) {
//     this.name = name;
//     this.img = img;
//     this.weight = weight;
//     this.height = height;
//     this.power = power;
//     this.id = id;
//   }
// }
const examplePokeArr = ['pikachu', 'mewtwo', 'squirtle', 'bulbasaur', 'gengar', 'ivysaur', 'venusaur', 'charizard'];

class Pokedex {
  constructor() {
    this.pokeList = [];
  }

  // Display Pokedex
  // eslint-disable-next-line class-methods-use-this
  displayPokedex(pokemon) {
    const wrapper = document.getElementById('wrapper');
    wrapper.style.display = 'flex';
    const pokeContainer = document.createElement('div');
    pokeContainer.classList.add('pokeContainer', `${pokemon.name}`);
    const nameTest = document.createElement('p');
    nameTest.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeFoto = document.createElement('img');
    pokeFoto.classList.add('pokeFoto');
    pokeFoto.src = `${pokemon.sprites.front_shiny}`;
    const commentBttn = document.createElement('button');
    const reserveBttn = document.createElement('button');
    commentBttn.id = `commentBttn${pokemon.id}`;
    commentBttn.innerText = 'comment';
    commentBttn.classList.add('btn', 'primary');
    reserveBttn.id = `reserveBttn${pokemon.id}`;
    reserveBttn.innerText = 'reservation';
    reserveBttn.classList.add('btn', 'secondary');
    const likes = document.createElement('div');
    const likeCounter = document.createElement('span');
    likeCounter.innerHTML = '<img src="pokeball.png"/> (7)';
    likes.appendChild(likeCounter);
    pokeContainer.appendChild(pokeFoto);
    pokeContainer.appendChild(nameTest);
    pokeContainer.appendChild(likes);
    pokeContainer.appendChild(commentBttn);
    pokeContainer.appendChild(reserveBttn);

    wrapper.appendChild(pokeContainer);
  }

  // Gets pokemon info from API
  async getPokemon(e) {
    pokeCall(e).then((poke) => {
      this.displayPokedex(poke);
    });
  }
}
const myPokedex = new Pokedex();

for (let i = 0; i < examplePokeArr.length; i += 1) {
  myPokedex.getPokemon(examplePokeArr[i]);
}
