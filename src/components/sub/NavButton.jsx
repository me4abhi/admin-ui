import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavButton({ _icon, disabled, ariaLabel, clickTrigger }) {
  return (
    <li
      className={disabled ? "page-item disabled" : "page-item"}
      onClick={clickTrigger}
    >
      <button className="page-link" aria-label={ariaLabel}>
        <span aria-hidden="true">
          <FontAwesomeIcon icon={_icon} />
        </span>
      </button>
    </li>
  );
}
