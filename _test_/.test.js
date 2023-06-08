const commands = require('../commands');
const data = require('../data.json')

test('Testing createNewItem function', () => {

  const item = 'skirt';
  const priceInCents = 400;
  const inStock = yes;
  const color = 'beige';

  const result = commands.createNewItem(item, priceInCents, inStock, color);

  expect(result).toEqual({
    item: 'tshirt',
    priceInCents: 400,
    inStock: yes,
    color: 'beige',
  });
});
