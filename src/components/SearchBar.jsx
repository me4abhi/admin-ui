import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

function SearchBar() {
  const { searchText, setSearchText } = useContext(PaginationContext);

  return (
    <input
      type="text"
      className="form-control mb-3"
      id="search-input"
      value={searchText}
      placeholder="Search by name, email or role"
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default SearchBar;
