import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getJobOffers } from "../../api/jobOfferApi";
import Navbar from "../../components/Navbar/NavbarPage";
import { Card, CardGroup } from 'react-bootstrap';
import './JobOfferPage.scss'

const JobOffersPage = () => {
  const [jobOffers, setJobOffers] = useState([]);

  const getJobOffersApi = async () => {
    try {
      const data = await getJobOffers();
      setJobOffers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobOffersApi();
  }, []);

  return (
    <>
      <h1 className="c-pageTitle" >Ofertas de trabajo</h1>

      <div  className="test">
        {jobOffers.map((item) => {
          console.log(item);
          return (
            <div>
              <div key={JSON.stringify(item)}>
                <div className="c-container">
                <CardGroup>
                <Link className="c-linkJobOffer" to={{ pathname: "/joboffer/" + item._id }}>
                <Card style={{ width: '16rem' }}>
                  <Card.Body>
                    <Card.Title className="c-jobOfferTitle">{item.jobInformation.jobTitle}</Card.Title>
                    <Card.Text className="c-cardText" >{item.jobInformation.jobTitle}</Card.Text>
                    <Card.Text className="c-cardText" >Vacantes: {item.jobInformation.vacancyNumbers}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              </CardGroup>
              </div>
            
                
              </div>
            </div>

          );
        })}
      </div>
      <Navbar></Navbar>
    </>
  );
};

export default JobOffersPage;


{/* <Link to={{ pathname: "/joboffer/" + item._id }}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{{item.jobInformation.jobInformation}}</Card.Title>
    <Card.Text>
    <h2> {item.jobInformation.jobTitle}</h2>
    <p> Vacantes: {item.jobInformation.vacancyNumbers}</p>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</Link>

<Link to={{ pathname: "/joboffer/" + item._id }}>
                  <h2> {item.jobInformation.jobTitle}</h2>
                  <p> Vacantes: {item.jobInformation.vacancyNumbers}</p>
                  <p> Idiomas: {item.jobInformation.languages}</p>
              <p> Sector: {item.jobInformation.sector}</p>
              <p> Estudios: {item.jobInformation.training}</p>
              <p> Descripción : {item.jobInformation.jobDescription}</p>
              <p> Salario : {item.jobInformation.terms.salary}</p>
              <p> Horas: {item.jobInformation.terms.workingHours}</p>
              <p> Tipo de contrato: {item.jobInformation.terms.contract}</p>
              <button>Crear oferta</button>
                </Link> */}