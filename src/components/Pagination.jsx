import { NavButton } from "./sub/NavButton";
import { useAdminContext } from "../hooks/useAdminContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { USERS_PER_PAGE } from "../data/users_per_page";
import getPagesArray from "../utils/getPagesArray";

function Pagination() {
  const { currentPage, filteredUsers, setCurrentPage } = useAdminContext();

  // pagination calculations
  const pageNumberArray = getPagesArray(filteredUsers, USERS_PER_PAGE);
  const lastPage = pageNumberArray[pageNumberArray.length - 1];

  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination">
        {currentPage === 1 ? (
          <>
            <NavButton _icon={faAnglesLeft} disabled={true} />
            <NavButton _icon={faChevronLeft} disabled={true} />
          </>
        ) : (
          <>
            <NavButton
              _icon={faAnglesLeft}
              disabled={false}
              clickTrigger={() => setCurrentPage(1)}
            />
            <NavButton
              _icon={faChevronLeft}
              disabled={false}
              clickTrigger={() => setCurrentPage((prev) => prev - 1)}
            />
          </>
        )}

        {pageNumberArray.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
            onClick={() => setCurrentPage(number)}
          >
            <button className="page-link">{number}</button>
          </li>
        ))}

        {currentPage === lastPage ? (
          <>
            <NavButton _icon={faChevronRight} disabled={true} />
            <NavButton _icon={faAnglesRight} disabled={true} />
          </>
        ) : (
          <>
            <NavButton
              _icon={faChevronRight}
              disabled={false}
              clickTrigger={() => setCurrentPage((prev) => prev + 1)}
            />
            <NavButton
              _icon={faAnglesRight}
              disabled={false}
              clickTrigger={() => setCurrentPage(lastPage)}
            />
          </>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
