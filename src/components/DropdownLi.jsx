/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const DropdownLi = ({children, link}) => {
  return (
    <li className="inline-block w-full border-t border-gray-400">
      <NavLink to={link} className="block hover:bg-gray-800 px-4 py-4">
        {children}
      </NavLink>
    </li>
  );
};
export default DropdownLi;
