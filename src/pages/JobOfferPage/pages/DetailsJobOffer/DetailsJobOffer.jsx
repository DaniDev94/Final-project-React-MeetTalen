import React, { useState, useEffect } from "react";
import Navbar from "../../../../components/Navbar/NavbarPage";
import { getJobOfferById } from "../../../../api/jobOfferApi"
import { useParams } from "react-router-dom";


const DetailsJobOffer = () => {
   
   
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const getJobOfferId = async () => {
        try {
            const data = await getJobOfferById(id);
            const item = data.data;
            setDetails(item);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getJobOfferId() ;
        console.log("estamos en  effect" , details)
    },[]);

    return (
        <>
            <h3>Oferta de trabajo</h3>
            <h1>{details.jobInformation.jobTitle}</h1>
 
            




            <Navbar></Navbar>
        </>
    )
}

export default DetailsJobOffer