import './style.css';
import { pokeCall } from './comments.js';

let pokeArr;
const getPokemon = () => {
  pokeCall().then((Allpoke) => {
    pokeArr = Allpoke.results;
    console.log(pokeArr);
  });
};

getPokemon();