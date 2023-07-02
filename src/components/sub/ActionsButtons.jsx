import React from "react";
import { faEdit, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontIcon } from "./FontIcon";
import { useAdminContext } from "../../hooks/useAdminContext";

export function ActionsButtons({ currentUser, index }) {
  const {
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    isEditableId,
    setIsEditableId,
    editableData,
    setEditableData,
    setErrorMessage,
    editBtnRefs,
    saveBtnRef,
  } = useAdminContext();

  // Edit User Data ----->
  const makeEditable = (target_user) => {
    const editable_user = filteredUsers.find(
      (user) => user.id === target_user.id
    );

    setIsEditableId(editable_user.id);
    setEditableData({
      id: target_user.id,
      name: target_user.name,
      email: target_user.email,
      role: target_user.role,
    });
  };
  // Edit User Data ----->

  // Save User Data ----->
  const validateEditedData = (editable_data) => {
    let input_elements_data = [];

    for (let key in editable_data) {
      if (editable_data.hasOwnProperty(key)) {
        if (!editable_data[key].length > 0) {
          input_elements_data.push(key);
        }
      }
    }

    return input_elements_data.length > 0 ? false : true;
  };

  const handleSave = (e) => {
    const data_validated = validateEditedData(editableData);

    if (data_validated) {
      setUsers(
        users.map((user) => (user.id === isEditableId ? editableData : user))
      );
      setIsEditableId("");
      setErrorMessage("");
      // setSearchText("");
    } else {
      setErrorMessage("Input field(s) can not be empty.");
    }
  };
  // Save User Data ----->

  // Delet CurrentUser Row ----->
  const deleteRow = (target_user) => {
    const users_remaining = users.filter((user) => user.id !== target_user.id);
    setUsers(users_remaining);
  };

  return (
    <>
      {!(currentUser.id === isEditableId) ? (
        <FontIcon
          icon={faEdit}
          _ref={(ref) => (editBtnRefs.current[index] = ref)}
          handleClick={() => makeEditable(currentUser)}
        />
      ) : (
        <FontIcon icon={faSave} _ref={saveBtnRef} handleClick={handleSave} />
      )}
      &nbsp;&nbsp;
      <FontIcon
        icon={faTrashAlt}
        color="red"
        handleClick={() => deleteRow(currentUser)}
      />
    </>
  );
}
