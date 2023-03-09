 


const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager("Tyler", 1, "tyler@gmail.com", 112)

  expect(manager.name).toEqual(expect.any(String))
});