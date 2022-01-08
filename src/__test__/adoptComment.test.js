/**
 * @jest-environment jsdom
 */
const serverData = [{ item: '1' }, { item: '2' }];
/* eslint-disbale arrow-body-style no-return-assign */
const counter = (serverData) => { return document.createElement('div').innerHTML = `(${serverData.length})`; };
test('Counts serverData in div tag and sets value as innerHTML', () => {
  expect(counter(serverData)).toBe('(2)');
});