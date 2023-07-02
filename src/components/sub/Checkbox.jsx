import React from "react";
import { useAdminContext } from "../../hooks/useAdminContext";

export function Checkbox({ currentId }) {
  const { selectedRows, setSelectedRows } = useAdminContext();

  const handleSelectRow = (e, userId) => {
    e.target.checked
      ? setSelectedRows([...selectedRows, userId])
      : setSelectedRows(selectedRows.filter((id) => id !== userId));
  };

  return (
    <input
      type="checkbox"
      className="clickable"
      checked={selectedRows.includes(currentId)}
      onChange={(e) => handleSelectRow(e, currentId)}
    />
  );
}
