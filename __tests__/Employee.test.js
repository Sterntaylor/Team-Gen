const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
const Employee = require('../lib/Employee');

test('Create new Employee', () => {
    const newHire = new Employee();
    expect(typeof(newHire)).toBe('object');
});
test('Name', ()=> {
    const name = 'Taylor';
    const newHire = new Employee(name);
    expect(newHire.name).toBe(name);
    expect(newHire.getName()).toBe(name);
});
test('ID', ()=> {
    const id = undefined;
    const newHire = new Employee(name, id);
    expect(newHire.id).toBe(id);
    expect(newHire.getId()).toBe(id);
});
test('email', ()=> {
    const email = 'sterntaylor0629@gmail.com';
    const newHire = new Employee(name, email);
    expect(newHire.email).toBe(email);
    expect(newHire.getEmail()).toBe(email);
});
test('role', ()=> {
    const role = 'Employee';
    const newHire = new Employee(role);
    expect(newHire.getRole()).toBe(role);
});