function filterUsers(currentUsers, searchText) {
  const search = searchText.toLowerCase().trim();

  const filteredUsers = currentUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search)
  );

  return filteredUsers;
}

export default filterUsers;
