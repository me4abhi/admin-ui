import { useContext } from "react";
import { AdminPageContext } from "../context/AdminPageContext";

export function useAdminContext() {
  return useContext(AdminPageContext);
}
