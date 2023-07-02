import { useAdminContext } from "../hooks/useAdminContext";

function DeleteSelectedButton() {
  const { selectedRows, users, setUsers, setErrorMessage } = useAdminContext();

  const deleteSelectedRows = () => {
    if (selectedRows.length > 0) {
      const users_remaining = users.filter(
        (user) => !selectedRows.includes(user.id)
      );
      setUsers(users_remaining);
    } else {
      setErrorMessage("No row is selected");
    }
  };

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={deleteSelectedRows}
    >
      Delete Selected
    </button>
  );
}

export default DeleteSelectedButton;
