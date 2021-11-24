import { CANDIDATE , CANDIDATE_ID} from './apiRoutes';
import axios from "axios";
import { addToken } from "../utils/jwt";

const accessToken = addToken();

const config = {
    headers:
    {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Authorization': accessToken
    }
}


export const getCandidates = async () => {
    try {
        const req = await axios.get(CANDIDATE, config)
        return req;
    } catch (error) {
        console.log(error);
    }
}

export const postCandidates = async (candidate) => {
    try {
        const data = localStorage.getItem('User');
        /* const addKeyToUser = { user: data }; */
        candidate.user=data
        const req = await axios.post(CANDIDATE_ID, candidate, config);
        console.log(req)
        return req;
    } catch (error) {
        console.error(error)
    }
}

export const deleteCandidate = (candidate) => {
    try {
        const req = axios.delete(CANDIDATE, candidate);
    } catch (error) {
        console.log(error);
    }
}


