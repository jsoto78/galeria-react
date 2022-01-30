import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary text-center mb-4">
      <div className="container-fluid">
        <span className="navbar-brand m-auto">
          <img
            src="./assets/l.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          Aplicación de galeria de fotos
        </span>
      </div>
    </nav>
  );
};
export default Header;
