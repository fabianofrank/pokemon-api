import './style.css';
import { pokeCall } from './apiCall.js';

class Pokecard {
  constructor(name, img, weight, height, power, id) {
    this.name = name;
    this.img = img;
    this.weight = weight;
    this.height = height;
    this.power = power;
    this.id = id;
  }
}

class Pokedex {
  constructor() {
    this.pokeList = [];
  }

  // Display Pokedex
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
    pokeContainer.appendChild(pokeFoto);
    pokeContainer.appendChild(nameTest);
    pokeContainer.appendChild(commentBttn);
    pokeContainer.appendChild(reserveBttn);

    wrapper.appendChild(pokeContainer);
  }

  // Gets pokemon info from API
  async getPokemon(e) {
    pokeCall(e).then((poke) => {
      const currentPokeCard = new Pokecard(
        poke.name,
        poke.sprites.front_shiny,
        poke.weight,
        poke.height,
        poke.base_experience,
        poke.id
      );
      this.displayPokedex(poke);
    });
  }
}

const examplePokeArr = ['pikachu', 'mew', 'mewtwo', 'squirtle', 'bulbasaur', 'ivysaur', 'venusaur', 'charizard'];
const myPokedex = new Pokedex();

for (let i = 0; i < examplePokeArr.length; i++) {
  myPokedex.getPokemon(examplePokeArr[i]);
}
