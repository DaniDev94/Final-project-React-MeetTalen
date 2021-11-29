import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, loginUser } from "../../api/usersApi";
import Navbar from "../../components/Navbar/NavbarPage";


export default function ProfilePage() {

    const navigate = useNavigate();

    const [user, setUser] = useState([]);



    const getInfoUser = async (user) => {
        try {
            const getToken = await loginUser(user);
            localStorage.setItem('User', getToken.user._id);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getInfoUser();
    }, []);




    return (
        <div>
            <p>Perfil</p>
            <div>
                <button onClick={() => { navigate('/login') }}>Cerrar Sesion </button>
            </div>
            <Navbar></Navbar>
        </div>
    )
}