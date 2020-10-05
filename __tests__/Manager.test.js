const Manager = require('../lib/Manager');

test('office number', () => {
    const officenumber = undefined;
    const newHire = new Manager(name, officenumber);
    expect(newHire.officenumber).toBe(officenumber);
    expect(newHire.getofficenumber()).toBe(officenumber);
})
test('role', ()=> {
    const role = 'Manager';
    const newHire = new Manager(name);
    expect(newHire.getRole()).toBe(role);
})