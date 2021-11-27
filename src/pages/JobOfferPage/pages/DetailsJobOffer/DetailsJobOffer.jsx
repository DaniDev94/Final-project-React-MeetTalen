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
        <div>Details

<h3>Candidatos</h3>
        <img src={id.image} alt= "{id.name}"/>
        <h1>{id.name.first} {id.name.last}</h1>
        <h2>{id.profession}</h2>
        <div>
        <i className="pi-twitter" style={{'fontSize': '2em'}}></i>   
        <i className="pi-instagram" style={{'fontSize': '2em'}}></i>   
        <i className="pi-facebook" style={{'fontSize': '2em'}}></i>   
        </div>
        <h2>Datos personales</h2>
        <div>
        <i className="pi-calendar" style={{'fontSize': '2em'}}></i> 
        <p>{id.information.age}</p>
        </div>
        <div>
        <i className="pi-map-marker" style={{'fontSize': '2em'}}></i>
        <p>{id.information.adress.community},{id.information.adress.locality}, {id.information.adress.pc}</p>
        </div>
        <div>
        <i className="pi-phone" style={{'fontSize': '2em'}}></i>
        <p>{id.information.phone}</p>
        </div>

        <h2>Palabra clave del perfil</h2>
        <p>{id.keywords[0]}</p>
        <p>{id.keywords[1]}</p>
        <p>{id.keywords[2]}</p>
        <p>{id.keywords[3]}</p>
        <p>{id.keywords[4]}</p>
        <p>{id.keywords[5]}</p>
        
        <h2>Formación académica</h2>
        <p>{id.training.type}</p>
        <p>{id.training.name}</p>
        <p>{id.training.center}</p>

        
        </div>
        <Navbar></Navbar>
        </>
    )
}

export default DetailsJobOffer