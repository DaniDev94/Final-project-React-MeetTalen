
import { JOBOFFER } from './apiRoutes';
import axios from "axios";


const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}

export const getJobOffers = async () => {
    try {
        console.log('entro en la funcion fetch')
        const data = { "user": "6192997c2749fb5610aa239d" }
        const req = await fetch('http://localhost:4000/joboffer', {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(data)
        })
        const res = await req.json()
        console.log(res)
        return res
    } catch (error) {

        console.error(error)
    }
}


export const postJobOffers = (jobOffer) => {
    try {

        const req = axios.post(JOBOFFER, jobOffer, config)
        return req.data
    } catch (error) {
        console.error(error)
    }
}
