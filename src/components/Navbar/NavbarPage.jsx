import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/profile">Perfil</Link>
      <Link to="/candidates">Candidatos</Link>
      <Link to="/joboffer/create">Crear</Link>
      <Link to="/joboffer">Ofertas</Link>
    </div>
  );
};
export default Navbar;
