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
            <li className="page-item disabled">
              <button className="page-link" aria-label="first page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </span>
              </button>
            </li>
            <li className="page-item disabled">
              <button className="page-link" aria-label="previous page">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="page-item" onClick={() => setCurrentPage(1)}>
              <button className="page-link" aria-label="last page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </span>
              </button>
            </li>
            <li
              className="page-item"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <button className="page-link" href="" aria-label="next page">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
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
            <li className="page-item disabled">
              <button className="page-link" aria-label="next page">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
            <li className="page-item disabled">
              <button className="page-link" aria-label="last page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
              </button>
            </li>
          </>
        ) : (
          <>
            <li
              className="page-item"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <button className="page-link" aria-label="next page">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
            <li className="page-item" onClick={() => setCurrentPage(lastPage)}>
              <button className="page-link" aria-label="last page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
