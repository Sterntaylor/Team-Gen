const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('Github username', ()=> {
    const githubUsername = undefined;
    const newHire = new Engineer(name, githubUsername);
    expect(newHire.github).toBe(githubUsername);
    expect(newHire.getGithub()).toBe(githubUsername);
})

test('role', ()=> {
    const role = 'Engineer';
    const newHire = new Engineer(name);
    expect(newHire.getRole()).toBe(role);
})
