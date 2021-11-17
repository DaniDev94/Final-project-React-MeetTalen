import axios from "axios";
import { addToken } from "../utils/jwt";

//Alojar la la funcion que recoge el token en una constante, pasarla a la autorización de la cabecera y probar en las rutar que queramos securizar --> console.log(accessToken) = token completo con bearer
const accessToken = addToken();

const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Authorization': `token ${accessToken}`
    }
}


export const registerUser = async (user) => {
    try {
        const reqInDb = await axios.post('http://localhost:4000/users', user, config);
        return reqInDb;
    } catch (err) {
        console.log(err);
    }
}


export const loginUser = async (user) => {
    try {
        const reqInDb = await axios.post('http://localhost:4000/users/login', user, config);
        return reqInDb.data;
    } catch (err) {
        console.log(err);
    }
}

//Lamas a la función donde quieras para hacer la función logout(añadir en nav)
export const logoutUser = () => {
    localStorage.setItem('token', '')
}
