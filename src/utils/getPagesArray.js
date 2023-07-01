function getPagesArray(users, usersPerPage) {
  let pageNumberArray = [];
  const numberOfPages = Math.ceil(users.length / usersPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumberArray.push(i);
  }

  return pageNumberArray;
}

export default getPagesArray;
