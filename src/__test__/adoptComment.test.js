/* eslint-disable arrow-body-style no-return-assign */
/**
 * @jest-environment jsdom
 */
const serverData = [{ item: '1' }, { item: '2' }];
const counter = (serverData) => { return document.createElement('div').innerHTML = `(${serverData.length})`; };
test('Counts serverData in div tag and sets value as innerHTML', () => {
  expect(counter(serverData)).toBe('(2)');
});