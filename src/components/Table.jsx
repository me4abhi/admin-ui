import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAdminContext } from "../hooks/useAdminContext";
import { TableHead } from "./sub/TableHead";
import { TableRow } from "./sub/TableRow";

function Table() {
  const { isLoading, displayUsers, searchText, handleSelectAllRows } =
    useAdminContext();

  return displayUsers.length > 0 ? (
    <div className="table-responsive">
      <table className="table table-responsive-lg">
        <TableHead handleSelectAllRows={handleSelectAllRows} />

        <tbody>
          {displayUsers.map((user, index) => (
            <TableRow key={user.id} currentUser={user} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  ) : isLoading ? (
    <div className="h-50">
      <FontAwesomeIcon
        icon={faSpinner}
        spin={true}
        spinPulse={true}
        color="grey"
        fontSize={"3rem"}
        className="d-block mx-auto my-5"
      />
    </div>
  ) : (
    <div className="h-50 my-5">
      <FontAwesomeIcon
        icon={faSadTear}
        color="grey"
        fontSize={"4rem"}
        className="d-block mx-auto mb-2"
      />
      <div className="h4 d-flex justify-content-center">Nothing here.</div>
    </div>
  );
}

export default Table;
