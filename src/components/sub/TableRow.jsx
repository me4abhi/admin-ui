import { useAdminContext } from "../../hooks/useAdminContext";
import { Checkbox } from "./Checkbox";
import { EditText } from "./EditText";
import { ActionsButtons } from "./ActionsButtons";

export function TableRow({ currentUser, index }) {
  const { selectedRows, isEditableId, editUserRefs } = useAdminContext();

  return (
    <tr className={selectedRows.includes(currentUser.id) ? "table-light" : ""}>
      <th scope="row">
        <Checkbox currentId={currentUser.id} />
      </th>

      {currentUser.id === isEditableId ? (
        <>
          <td>
            <EditText
              content="name"
              _ref={(ref) => (editUserRefs.current[0] = ref)}
            />
          </td>
          <td>
            <EditText
              content="email"
              _ref={(ref) => (editUserRefs.current[1] = ref)}
            />
          </td>
          <td>
            <EditText
              content="role"
              _ref={(ref) => (editUserRefs.current[2] = ref)}
            />
          </td>
        </>
      ) : (
        <>
          <td>{currentUser.name}</td>
          <td>{currentUser.email}</td>
          <td>{currentUser.role}</td>
        </>
      )}

      <td>
        <ActionsButtons currentUser={currentUser} index={index} />
      </td>
    </tr>
  );
}
