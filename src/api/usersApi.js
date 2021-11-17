import axios from "axios";


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}


export const registerUser = async (user) => {
    try {
        const req = await axios.post('http://localhost:4000/users', user, config);
        return req;
    } catch (err) {
        console.log(err);
    }
}
