import axios from "axios";
import { JOBOFFER, CREATE_JOBOFFER } from './apiRoutes';
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
        const data = { "user": "6192997c2749fb5610aa239d" }
        const req = await fetch('http://localhost:4000/joboffer', {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(data)
        })
        const res = await req.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
    }
}


export const postJobOffers = async (jobOffer) => {
    try {
        const req = await axios.post(CREATE_JOBOFFER, jobOffer, config);
        console.log(req)
        return req;
    } catch (error) {
        console.error(error)
    }
}
