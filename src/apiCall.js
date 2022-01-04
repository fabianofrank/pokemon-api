const pokeCall = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
      method: 'GET',
    });
    const pokemonList = await response.json();
    return pokemonList;
  };

  export { pokeCall };
  