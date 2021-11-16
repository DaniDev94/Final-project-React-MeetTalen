import axios from "axios";

export async function getJobOffers(){
    return axios.get("http://localhost:3000/joboffer");
}

export async function postJobOffers(jobOffer){
    return axios.post("http://localhost:3000/joboffer", jobOffer);
}
