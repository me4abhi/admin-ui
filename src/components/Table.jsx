import { FontIcon } from "./common/FontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSadTear,
  faSave,
  faSpinner,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

function Table() {
  const {
    displayUsers,
    searchText,
    selectedRows,
    handleSelectRow,
    handleSelectAllRows,
    deleteRow,
    makeEditable,
    isEditableId,
    editableData,
    handleEdit,
    handleSave,
    editUserRefs,
    saveBtnRef,
    editBtnRefs,
  } = useContext(PaginationContext);

  return displayUsers.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <input
              type="checkbox"
              className="clickable"
              checked={
                selectedRows.length === displayUsers.length ? true : false
              }
              onChange={handleSelectAllRows}
            />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {displayUsers.map((user, index) => (
          <tr
            key={user.id}
            className={selectedRows.includes(user.id) ? "table-light" : ""}
          >
            <th scope="row">
              <input
                type="checkbox"
                className="clickable"
                checked={selectedRows.includes(user.id)}
                onChange={(e) => handleSelectRow(e, user.id)}
              />
              {user.id}
            </th>
            {user.id === isEditableId ? (
              <>
                <td>
                  <input
                    name="name"
                    type="text"
                    ref={(ref) => (editUserRefs.current[0] = ref)}
                    value={editableData.name}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    name="email"
                    type="text"
                    ref={(ref) => (editUserRefs.current[1] = ref)}
                    value={editableData.email}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    name="role"
                    type="text"
                    ref={(ref) => (editUserRefs.current[2] = ref)}
                    value={editableData.role}
                    onChange={handleEdit}
                  />
                </td>
              </>
            ) : (
              <>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </>
            )}
            <td>
              {user.id === isEditableId ? (
                <FontIcon
                  icon={faSave}
                  _ref={saveBtnRef}
                  handleClick={handleSave}
                />
              ) : (
                <FontIcon
                  icon={faEdit}
                  _ref={(ref) => (editBtnRefs.current[index] = ref)}
                  handleClick={() => makeEditable(user)}
                />
              )}
              &nbsp;&nbsp;
              <FontIcon
                icon={faTrashAlt}
                color="red"
                handleClick={() => deleteRow(user.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : searchText.length > 0 ? (
    <div className="h-50 my-5">
      <FontAwesomeIcon
        icon={faSadTear}
        color="grey"
        fontSize={"4rem"}
        className="clickable d-block mx-auto mb-2"
      />
      <div className="h4 d-flex justify-content-center">No results found.</div>
    </div>
  ) : (
    <div className="h-50">
      <FontAwesomeIcon
        icon={faSpinner}
        spin={true}
        spinPulse={true}
        color="grey"
        fontSize={"2rem"}
        className="clickable d-block mx-auto my-5"
      />
    </div>
  );
}

export default Table;
