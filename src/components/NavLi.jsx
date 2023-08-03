/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavLi = ({ children, route }) => {
  return (
    <li className="inline-block navElement">
      <NavLink to={route} className="inline-block px-6 py-4">
        {children}
      </NavLink>
    </li>
  );
};
export default NavLi;
