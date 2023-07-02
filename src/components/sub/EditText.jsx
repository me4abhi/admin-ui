import React from "react";
import { useAdminContext } from "../../hooks/useAdminContext";

export function EditText({ content, _ref }) {
  const { editableData, setEditableData } = useAdminContext();

  const handleEdit = (e) => {
    const { name, value } = e.target;

    setEditableData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <input
      type="text"
      name={content}
      ref={_ref}
      value={editableData[content]}
      onChange={handleEdit}
    />
  );
}
