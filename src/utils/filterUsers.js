function filterUsers(users, searchText) {
  const search = searchText.trim();
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search)
  );

  return filteredUsers;
}

export default filterUsers;
