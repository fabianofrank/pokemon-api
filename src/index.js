import './style.css';
import { pokeCall } from './apiCall.js';

let pokeArr;
const getPokemon = () => {
  pokeCall().then((Allpoke) => {
    pokeArr = Allpoke.results;
    console.log(pokeArr);
  });
};

getPokemon();
