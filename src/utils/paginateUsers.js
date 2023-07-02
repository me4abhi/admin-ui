function paginateUsers(filteredUsers, currentPage, usersPerPage) {
  const startIndex = currentPage * usersPerPage - usersPerPage;

  return filteredUsers.slice(startIndex, startIndex + usersPerPage);
}

export default paginateUsers;
