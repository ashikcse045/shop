import { NavLink } from "react-router-dom";
import NavLi from "./NavLi";
import DropdownLi from "./DropdownLi";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";

const Nav = () => {
  const {globalState} = useContext(GlobalContext);

  if(globalState.loading) {
    return (
      <div className="container">
        <h1 className="text-3xl">loading...</h1>
      </div>
    )
  }

  return (
    <div className="w-full bg-gray-700 text-gray-100">
      <div className="container">
        <div className="smallContainer flex flex-row items-center justify-between">
          {/* <!-- logo --> */}
          <div className="w-1/4 items-center">
            <NavLink
              to="/"
              className="inline-block py-2 font-lobster uppercase text-5xl"
            >
              shop
            </NavLink>
          </div>

          {/* <!-- nav --> */}
          <div className="w-3/4 flex flex-row items-center justify-end">
            <ul className="hidden md:flex flex-row justify-end items-center capitalize">
              <NavLi route="/" >home</NavLi>
              <NavLi route="/add" >add</NavLi>
              <li className="inline-block px-6 py-4 relative navElement">
                categories
                <ul className="bg-gray-700 absolute left-0 top-14 w-60 dropDown">
                  {/* <DropdownLi>electroincs</DropdownLi> */}
                  {globalState.categories.map((e) => (<DropdownLi key={e} >{e}</DropdownLi>))}
                </ul>
              </li>
            </ul>

            {/* <!-- icons --> */}
            <ul className="w-1/5 flex flex-row justify-end items-center space-x-6">
              <li className="linline-block">
                <NavLink to="/cart" className="inline-block relative">
                  <span className="material-symbols-outlined hover:text-primary transition-colors">
                    shopping_cart
                  </span>
                  <span className="bg-primary w-5 h-5 flex items-center justify-center p-2 text-xs rounded-full cartCount">
                    {globalState.cart.length}
                  </span>
                </NavLink>
              </li>
              <li className="linline-block">
                <NavLink to="/" className="inline-block">
                  <span className="material-symbols-outlined hover:text-primary transition-colors">
                    account_circle
                  </span>
                </NavLink>
              </li>
              <li>
                <button to="/" className="inline-block md:hidden">
                  <span className="material-symbols-outlined"> menu </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
