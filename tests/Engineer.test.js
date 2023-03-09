const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Tyler", 1, "tyler@gmail.com", "tyler123")

test('insures that engineers github value is a string', () => {
    expect(engineer.github).toEqual(expect.any(String))
});