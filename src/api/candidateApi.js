import { CANDIDATE } from './apiRoutes';
import axios from "axios";

const config ={
    headers:
{
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}
} 


export const getCandidates= async () => {
    try{
        const req = await axios.get(CANDIDATE, config)
        return req
    }catch(error){
        console.log(error);
    }
}

export const deleteCandidate= (candidate)=> {
    try{
        const req = axios.delete(CANDIDATE,candidate);
    }catch(error){
        console.log(error);
    }
}


