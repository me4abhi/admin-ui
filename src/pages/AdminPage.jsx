import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";
import Table from "../components/Table";
import DeleteSelectedButton from "../components/DeleteSelectedButton";
import Pagination from "../components/Pagination";
import { useAdminContext } from "../hooks/useAdminContext";

function AdminPage() {
  const { errorMessage } = useAdminContext();

  return (
    <div className="m-4">
      <SearchBar />
      <Table />
      {errorMessage.length > 0 && <ErrorMessage errorMessage={errorMessage} />}
      <div>
        <DeleteSelectedButton />
        <Pagination />
      </div>
    </div>
  );
}

export default AdminPage;
