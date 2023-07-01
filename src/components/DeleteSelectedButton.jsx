import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

function DeleteSelectedButton() {
  const { deleteSelectedRows } = useContext(PaginationContext);

  return (
    <button
      type="button"
      className="btn btn-danger float-start"
      onClick={deleteSelectedRows}
    >
      Delete Selected
    </button>
  );
}

export default DeleteSelectedButton;
