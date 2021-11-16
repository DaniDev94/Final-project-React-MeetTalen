
import{JOBOFFER} from './apiRoutes';
import axios from "axios";


const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

export const getJobOffers= () => {
    try{
        const req = axios.get(JOBOFFER,headers)
        return req
    }catch(error){
        console.error(error)
    }
}


export const postJobOffers= (jobOffer)=> {
    try{
    const req = axios.post(JOBOFFER, jobOffer, headers)
        return req
    } catch (error) {
        console.error(error)
    }
}
