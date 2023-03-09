 

const Employee = require('../lib/Employee');

test('creates a employee object', () => {
  const employee = new Employee("Tyler", 1, "tyler@gmail.com")

  expect(employee.id).toEqual(expect.any(Number))
});