const Intern = require('../lib/Intern');

test('School info', () => {
    const school = undefined;
    const newHire = new Intern(name, school);
    expect(newHire.school).toBe(school);
    expect(newHire.getSchool()).toBe(school);
})
test('role', ()=> {
    const role = 'Intern';
    const newHire = new Intern(name);
    expect(newHire.getRole()).toBe(role);
})
