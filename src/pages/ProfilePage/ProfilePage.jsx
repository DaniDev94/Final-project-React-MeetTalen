import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/usersApi";
import Navbar from "../../components/Navbar/NavbarPage";


export default function ProfilePage() {

    const navigate = useNavigate();

  /*   const logoutRedirect = () =>{
        return logoutUser(navigate('/login'));
    } */

    return (
        <div>
            <p>Perfil</p>
            <div>
                <button onClick={()=>{navigate('/login')}}>Cerrar Sesion </button> 
            </div>
            <Navbar></Navbar>
        </div>
    )
}