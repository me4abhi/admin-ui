function paginateUsers(users, currentPage, usersPerPage) {
  const startIndex = currentPage * usersPerPage - usersPerPage;

  return users.slice(startIndex, startIndex + usersPerPage);
}

export default paginateUsers;
