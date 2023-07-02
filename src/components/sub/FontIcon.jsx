import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FontIcon({ icon, color, _ref, handleClick }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ color: color }}
      ref={_ref}
      onClick={handleClick}
      className="clickable"
    />
  );
}
