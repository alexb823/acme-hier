function showManagementStructure(usersArr) {
  const boss = usersArr.find(user => !user.managerId);
  return showUser(boss, usersArr, '').join('\n');
}

function showUser(boss, usersArr, level) {
  let structure = [`${level}${boss.name}`];
  const reportToBoss = usersArr.filter(user => user.managerId === boss.id);
  if (reportToBoss.length) {
    level += '- ';
    reportToBoss.forEach(report => {
      structure = [...structure, ...showUser(report, usersArr, level)];
    });
  }
  return structure;
}

module.exports = showManagementStructure;
