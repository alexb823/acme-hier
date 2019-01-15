const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
];

function showManagementStructure(usersArr) {
  usersArr.forEach((user, index) => {
    if (user.hasOwnProperty('managerId')) {
      const previousUser = usersArr[index - 1];
      let prefix = ' -';
      if (user.managerId > previousUser.managerId) prefix = '\t' + prefix;
      console.log(prefix, user.name);
    }else {
      console.log(user.name);
    }
  });
}

showManagementStructure(users);
