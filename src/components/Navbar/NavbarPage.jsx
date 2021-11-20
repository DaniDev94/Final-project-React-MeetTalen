import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {RiShoppingBagLine} from 'react-icons/ri';
import './NavbarPage.scss';



const Navbar = () => {
  return (
    <div className='c-containerNavbar'>
      <Link className='c-linkNav' to="/profile">Perfil <BiHomeAlt className="c-iconNavbar "/> </Link>
      <Link className='c-linkNav' to="/candidates">Candidatos <BsPeople className="c-iconNavbar"/> </Link>
      <Link className='c-linkNav' to="/joboffer/create">Crear <AiOutlinePlusSquare className="c-iconNavbar"/> </Link>
      <Link className='c-linkNav' to="/joboffer">Ofertas <RiShoppingBagLine className="c-iconNavbar"/></Link>
    </div>
  );
};
export default Navbar;

