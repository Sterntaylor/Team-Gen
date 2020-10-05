const Manager = require('../lib/Manager');

test('office number', () => {
    const number = undefined;
    const newHire = new Manager(name, number);
    expect(newHire.number).toBe(number);
    expect(newHire.getNumber()).toBe(number);
})
test('role', ()=> {
    const role = 'Manager';
    const newHire = new Manager(name);
    expect(newHire.getRole()).toBe(role);
})