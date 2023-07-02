import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";
import Table from "../components/Table";
import DeleteSelectedButton from "../components/DeleteSelectedButton";
import Pagination from "../components/Pagination";
import { useAdminContext } from "../hooks/useAdminContext";

function AdminPage() {
  const { errorMessage, searchText, displayUsers } = useAdminContext();

  return (
    <div className="m-2">
      <SearchBar />
      <Table />
      {errorMessage.length > 0 && <ErrorMessage errorMessage={errorMessage} />}
      {!(searchText.length > 0 || displayUsers.length === 0) && (
        <div className="mt-2 d-flex flex-column align-items-stretch gap-2 flex-sm-row justify-content-sm-center align-items-sm-start gap-sm-4">
          <DeleteSelectedButton />
          <Pagination />
        </div>
      )}
    </div>
  );
}

export default AdminPage;
