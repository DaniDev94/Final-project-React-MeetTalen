import axios from "axios";
import { JOBOFFER } from './apiRoutes';
import { addToken } from "../utils/jwt";


const accessToken = addToken();


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Authorization': accessToken
    }
}


export const getJobOffers = async () => {
    try {
        const data = localStorage.getItem('User');
        const addKeyToUser = { user: data };
        const req = await fetch('http://localhost:4000/joboffer', {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(addKeyToUser)
        })
        const res = await req.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
    }
}


export const postJobOffers = (jobOffer) => {
    try {
        const req = axios.post(JOBOFFER, jobOffer, config);
        return req;
    } catch (error) {
        console.error(error)
    }
}
