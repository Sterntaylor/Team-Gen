const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('Github username', ()=> {
    const username = undefined;
    const newHire = new Engineer(name, username);
    expect(newHire.github).toBe(username);
    expect(newHire.getGithub()).toBe(username);
})

test('role', ()=> {
    const role = 'Engineer';
    const newHire = new Engineer(name);
    expect(newHire.getRole()).toBe(role);
})
