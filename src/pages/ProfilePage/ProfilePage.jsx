import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/usersApi";
import Navbar from "../../components/Navbar/NavbarPage";


export default function ProfilePage() {

    const navigate = useNavigate();

    const logoutRedirect = () =>{
        return logoutUser(navigate('/'));
    }

    return (
        <div>
            <p>Perfil</p>
            <div>
                <button onClick={logoutRedirect}>Cerrar Sesion </button> 
            </div>
            <Navbar></Navbar>
        </div>
    )
}