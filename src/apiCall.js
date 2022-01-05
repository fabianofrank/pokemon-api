const pokeCall = async (e) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {
    method: 'GET',
  });
  const pokemonInfo = await response.json();
  return pokemonInfo;
};

// eslint-disable-next-line import/prefer-default-export
export { pokeCall };
