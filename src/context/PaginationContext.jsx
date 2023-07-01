import { createContext, useEffect, useRef, useState } from "react";
import { USERS_API } from "../data/users_api";
import getApiResponse from "../services/getApiResponse";
import paginateUsers from "../utils/paginateUsers";
import getPagesArray from "../utils/getPagesArray";
import filterUsers from "../utils/filterUsers";

const PaginationContext = createContext();

function PaginationProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditableId, setIsEditableId] = useState("");
  const [editableData, setEditableData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  const editUserRefs = useRef([]);
  const saveBtnRef = useRef();
  const editBtnRefs = useRef([]);

  // pagination calculations
  const usersPerPage = 10;
  const pageNumberArray = getPagesArray(filteredUsers, usersPerPage);

  // calling api only when the Context.Provider is mounted
  useEffect(() => {
    getApiResponse(USERS_API)
      .then((users) => {
        setUsers(users.data);
        setFilteredUsers(users.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let display_users = paginateUsers(filteredUsers, currentPage, usersPerPage);

    setDisplayUsers(display_users);
    setSelectedRows([]);

    if (display_users.length === 0 && filteredUsers.length > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage, filteredUsers]);

  useEffect(() => {
    const filtered_users = filterUsers(users, searchText);
    setFilteredUsers(filtered_users);
  }, [searchText]);

  const handleSelectRow = (e, userId) => {
    e.target.checked
      ? setSelectedRows([...selectedRows, userId])
      : setSelectedRows(selectedRows.filter((id) => id !== userId));
  };

  const handleSelectAllRows = (e) => {
    const current_page_rows = displayUsers.map((user) => user.id);
    e.target.checked ? setSelectedRows(current_page_rows) : setSelectedRows([]);
  };

  const deleteSelectedRows = () => {
    if (selectedRows.length > 0) {
      const users_remaining = filteredUsers.filter(
        (user) => !selectedRows.includes(user.id)
      );
      setFilteredUsers(users_remaining);
    } else {
      console.log("No row selected");
    }
  };

  const deleteRow = (userId) => {
    const users_remaining = filteredUsers.filter((user) => user.id !== userId);
    setFilteredUsers(users_remaining);
  };

  const makeEditable = (targetUser) => {
    const editableUser = filteredUsers.find(
      (user) => user.id === targetUser.id
    );
    console.log(editableUser.id);
    setIsEditableId(editableUser.id);

    setEditableData({
      id: targetUser.id,
      name: targetUser.name,
      email: targetUser.email,
      role: targetUser.role,
    });
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    setFilteredUsers(
      filteredUsers.map((user) =>
        user.id === isEditableId ? editableData : user
      )
    );
    setIsEditableId("");
  };

  const handleClickOutsideUserInputs = (e) => {
    if (editUserRefs.current.every((ref) => ref && !ref.contains(e.target))) {
      console.log("clicked outside the inputs");
      setIsEditableId("");
    } else {
      console.log("clicked inside the inputs");
    }
  };

  const handleDocumentClick = (e) => {
    console.log(editBtnRefs.current, e.target);
    if (
      saveBtnRef.current &&
      !saveBtnRef.current.contains(e.target) &&
      !editBtnRefs.current.some((ref) => ref && ref.contains(e.target))
    ) {
      handleClickOutsideUserInputs(e);
    }
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      handleDocumentClick(e);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  return (
    <PaginationContext.Provider
      value={{
        usersPerPage,
        pageNumberArray,
        displayUsers,
        setDisplayUsers,
        currentPage,
        setCurrentPage,
        searchText,
        setSearchText,
        // handleSearch,
        filteredUsers,
        setFilteredUsers,
        selectedRows,
        handleSelectRow,
        handleSelectAllRows,
        deleteSelectedRows,
        deleteRow,
        makeEditable,
        isEditableId,
        editableData,
        handleEdit,
        handleSave,
        editUserRefs,
        handleClickOutsideUserInputs,
        saveBtnRef,
        editBtnRefs,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export { PaginationContext, PaginationProvider };
