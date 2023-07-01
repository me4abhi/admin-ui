import { useEffect, useState } from "react";
import { USERS_API } from "../data/users_api";
import getApiResponse from "../services/getApiResponse";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import DeleteSelectedButton from "../components/DeleteSelectedButton";
import SearchBar from "../components/SearchBar";

function AdminPage() {
  return (
    <div className="m-4">
      <SearchBar />
      <Table />
      <div>
        <DeleteSelectedButton />
        <Pagination />
      </div>
    </div>
  );
}

export default AdminPage;
