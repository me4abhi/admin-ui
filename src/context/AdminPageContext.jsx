import { createContext, useEffect, useRef, useState } from "react";
import { USERS_API } from "../data/users_api";
import { USERS_PER_PAGE } from "../data/users_per_page";
import getApiResponse from "../services/getApiResponse";
import paginateUsers from "../utils/paginateUsers";
import filterUsers from "../utils/filterUsers";

const AdminPageContext = createContext();

function AdminPageProvider({ children }) {
  // states
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditableId, setIsEditableId] = useState("");
  const [editableData, setEditableData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // refs
  const editUserRefs = useRef([]);
  const saveBtnRef = useRef();
  const editBtnRefs = useRef([]);

  // calling api when the Context.Provider is mounted
  useEffect(() => {
    getApiResponse(USERS_API)
      .then((users) => {
        setUsers(users.data);
        setFilteredUsers(users.data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  // set displayUsers-10 based on filtered users (filtered by search)
  useEffect(() => {
    let display_users = paginateUsers(
      filteredUsers,
      currentPage,
      USERS_PER_PAGE
    );

    setDisplayUsers(display_users);
    setSelectedRows([]);

    if (display_users.length === 0 && filteredUsers.length > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage, filteredUsers]);

  // re-assigning `filteredUsers` whenever our initial `users` data or `searchText` changes
  useEffect(() => {
    const filtered_users = filterUsers(users, searchText);

    setFilteredUsers(filtered_users);
  }, [users, searchText]);

  useEffect(() => {
    if (selectedRows.length > 0) {
      setErrorMessage("");
    }
  }, [selectedRows]);

  // handling clicks on the document/webpage
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        // conditional: save & edit buttons
        saveBtnRef.current &&
        !saveBtnRef.current.contains(e.target) &&
        !editBtnRefs.current.some((ref) => ref && ref.contains(e.target))
      ) {
        handleClickOutsideUserInputs(e);
      }
    };

    function handleMouseDown(e) {
      handleDocumentClick(e);
    }

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  // handle click outside edit-user input elements
  const handleClickOutsideUserInputs = (e) => {
    if (editUserRefs.current.every((ref) => ref && !ref.contains(e.target))) {
      setIsEditableId("");
      setErrorMessage("");
    } else {
    }
  };

  return (
    <AdminPageContext.Provider
      value={{
        users,
        setUsers,
        displayUsers,
        setDisplayUsers,
        currentPage,
        setCurrentPage,
        searchText,
        setSearchText,
        filteredUsers,
        setFilteredUsers,
        selectedRows,
        setSelectedRows,
        isEditableId,
        setIsEditableId,
        editableData,
        setEditableData,
        editUserRefs,
        handleClickOutsideUserInputs,
        saveBtnRef,
        editBtnRefs,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AdminPageContext.Provider>
  );
}

export { AdminPageContext, AdminPageProvider };
