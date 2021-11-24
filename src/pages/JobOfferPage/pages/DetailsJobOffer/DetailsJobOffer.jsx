import React, { useState, useEffect } from "react";
import Navbar from "../../../../components/Navbar/NavbarPage";
import { getJobOfferById } from "../../../../api/jobOfferApi"
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import '../DetailsJobOffer/DetailsJobOffer.scss'





const DetailsJobOffer = () => {
   
 
    const { id } = useParams();
    const [details, setDetails] = useState();
   
    const getJobOfferId = async () => {
        try {
            const data = await getJobOfferById(id);
            const item = data.data;
            setDetails(item);
            console.log(item)
            
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
         <Helmet>

<style>{'body { background-color:#0d202a}'}</style>

</Helmet>

<h2 className= "d-infor" >Detalles de la oferta</h2>
        <div className = "d-details">
        
        
       <h3 className= "d-info" >{details && details.jobInformation.jobTitle}</h3>
       <p className= "d-inf"> <strong>Ciudad : </strong>  {details && details.jobInformation.city}</p>
       <p className= "d-inf"> <strong>Vacantes : </strong>  {details && details.jobInformation.vacancyNumbers}</p>
       <p className= "d-inf" > <strong> Idiomas : </strong>  {details && details.jobInformation.languages}</p>
       <p className= "d-inf"> <strong>Sector : </strong>{details && details.jobInformation.sector}</p>
       <p className= "d-inf"><strong>Estudios : </strong>{details && details.jobInformation.training}</p>
       <p className= "d-inf"><strong>Funciones : </strong> {details && details.jobInformation.jobDescription}</p>
       <p className= "d-inf"><strong>Salario : </strong>{details && details.jobInformation.terms.salary}€</p>
       <p className= "d-inf"><strong>Jornada : </strong>{details && details.jobInformation.terms.workingHours}</p>
       <p className= "d-inf"><strong>Contrato : </strong>{details && details.jobInformation.terms.contract}</p>


       {/* {details ? {details && <p>details.jobinformation.ciyt</p>}} */}
       </div>
        <Navbar></Navbar>
        </>
    )
}

export default DetailsJobOffer