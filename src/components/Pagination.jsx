import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

function Pagination() {
  const { pageNumberArray, currentPage, setCurrentPage } =
    useContext(PaginationContext);

  const lastPage = pageNumberArray[pageNumberArray.length - 1];

  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination">
        {currentPage === 1 ? (
          <>
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="first page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </span>
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="previous page">
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="page-item" onClick={() => setCurrentPage(1)}>
              <a className="page-link" href="#" aria-label="last page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <a className="page-link" href="#" aria-label="next page">
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
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
            <a className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}

        {currentPage === lastPage ? (
          <>
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="next page">
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="last page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
              </a>
            </li>
          </>
        ) : (
          <>
            <li
              className="page-item"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <a className="page-link" href="#" aria-label="next page">
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
            <li className="page-item" onClick={() => setCurrentPage(lastPage)}>
              <a className="page-link" href="#" aria-label="last page">
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
