import React, { useState } from "react";
import { signOut } from "../../API/auth";
const Navbar = () => {
  const [login, setLogin] = useState(false);

  const Logout = () => {
    signOut()
    window.localStorage.href='/'
  };
  return (
    <div>
      <nav className="navbar bg-info">
        <div className="container-fluid sticky-top">
          <div className="navbar-brand text-light sm-text-center">TOUR APP</div>
             
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
