import React, { useState, useEffect } from "react";
import { getCandidateByName } from "../../api/candidateApi"
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/NavbarPage";





const DetailsCandidate = () => {
   
 
    const { name } = useParams();
    const [details, setDetails] = useState();
   
    const getCandidateName = async () => {
        try {
            const data = await getCandidateByName(name);
            const item = data.data;
            setDetails(item);   
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCandidateName() ;
    },[]);

    
    return(
        <>
        <h1>details</h1>

        <img src = {details && details.image} />
        <h2>{details && details.name.first}</h2>
        <h2>{details && details.name.last}</h2>
        <p>{details && details.profession}</p>
        <p>{details && details.networks}</p>
        <p>{details && details.information.age}</p>
        <p>{details && details.information.address.community}</p>
        <p>{details && details.information.address.locality}</p>
        <p>{details && details.information.address.pc}</p>
        
        <p>{details && details.information.phone}</p>
       
        <p>{details && details.keywords}</p>
        <p>{details && details.training.type}</p>
        <p>{details && details.training.name}</p>
        <p>{details && details.training.center}</p>
        
        <Navbar></Navbar>

        </>
    )
    }
    export default DetailsCandidate