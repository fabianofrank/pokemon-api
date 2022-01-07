/**
 * @jest-environment jsdom
 */
const { itemCounter } = require('./itemsCounter.js');
const { mockWrapper } = require('./itemsCounter.js');
const { itemCounterWrapper } = require('./itemsCounter.js');

test('Counts items  in wrapper and sets value in itemCounterWrapper', () => {
  const pokemonItems = 5;
  for (let i = 0; i < pokemonItems; i += 1) {
    const testPokeCard = document.createElement('div');
    mockWrapper.appendChild(testPokeCard);
  }
  itemCounter();
  expect(itemCounterWrapper.innerText).toBe('(5)');
});