
const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern("Tyler", 1, "tyler@gmail.com", "UW")

    expect(intern.school).toEqual(expect.any(String))
});