/**
 * @jest-environment jsdom
 */

const mockWrapper = document.createElement('div');
const itemCounterWrapper = document.createElement('span');

function itemCounter() {
  itemCounterWrapper.innerText = `(${mockWrapper.childElementCount})`;
}

exports.mockWrapper = mockWrapper;
exports.itemCounterWrapper = itemCounterWrapper;
exports.itemCounter = itemCounter;