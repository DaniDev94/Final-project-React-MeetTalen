import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/NavbarPage";


export default function ProfilePage() {

    const navigate = useNavigate();

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