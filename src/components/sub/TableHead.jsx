import React from "react";
import { useAdminContext } from "../../hooks/useAdminContext";

export function TableHead() {
  const { selectedRows, setSelectedRows, displayUsers } = useAdminContext();

  const handleSelectAllRows = (e) => {
    const current_page_rows = displayUsers.map((user) => user.id);
    e.target.checked ? setSelectedRows(current_page_rows) : setSelectedRows([]);
  };

  return (
    <thead>
      <tr>
        <th scope="col">
          <input
            type="checkbox"
            className="clickable"
            checked={selectedRows.length === displayUsers.length ? true : false}
            onChange={handleSelectAllRows}
          />
        </th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
}
