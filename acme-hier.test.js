const showManagementStructure = require('./acme-hier');

const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
  { id: 6, name: 'alex', managerId: 1 },
];

test('returns the management structure as a string', () => {
  console.log(showManagementStructure(users));
  expect(showManagementStructure(users)).toBe('moe\n- larry\n- - curly\n- shep\n- - groucho\n- alex');
});
