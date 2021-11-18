import axios from "axios";
import { USERS, LOGIN } from './apiRoutes';


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}


export const registerUser = async (user) => {
    try {
        const reqInDb = await axios.post(USERS, user, config);
        return reqInDb;
    } catch (err) {
        console.log(err);
    }
}


export const loginUser = async (user) => {
    try {
        const reqInDb = await axios.post(LOGIN, user, config);
        return reqInDb.data;
    } catch (err) {
        console.log(err);
    }
}

//Lamas a la función donde quieras para hacer la función logout(añadir en componente de página profile)
export const logoutUser = () => {
    localStorage.setItem('Token', '')
}
