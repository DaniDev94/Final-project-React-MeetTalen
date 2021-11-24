import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { RiShoppingBagLine } from 'react-icons/ri';
import './NavbarPage.scss';



const Navbar = () => {
  return (
    <div className='c-containerNavbar'>
      <div className="c-containerLink">
        <Link className='c-linkNav' to="/profile"><BiHomeAlt className="c-iconNavbar" />  Perfil</Link>
      </div>
      <div className="c-containerLink">
        <Link className='c-linkNav' to="/candidates"><BsPeople className="c-iconNavbar" /> Candidatos</Link>
      </div>
      <div className="c-containerLink">
        <Link className='c-linkNav' to="/joboffer/create"> <AiOutlinePlusSquare className="c-iconNavbar" /> Crear </Link>
      </div>
      <div className="c-containerLink">
        <Link className='c-linkNav' to="/joboffer"><RiShoppingBagLine className="c-iconNavbar" /> Ofertas </Link>
      </div>
    </div>
  );
};
export default Navbar;

