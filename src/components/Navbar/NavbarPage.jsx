import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/candidates">Candidatos</Link>
      <Link to="/joboffer/create">Crear</Link>
      <Link to="/joboffer">Ofertas</Link>
      <Link to="#">cuenta</Link>
     
    </div>
  );
};
export default Navbar;
