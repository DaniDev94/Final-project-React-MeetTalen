import React, { useState, useEffect } from "react";
import { getJobOffers } from "../../api/jobOfferApi";

const JobOffers = () => {
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
      <h1>Ofertas de trabajo</h1>
     
      <div>
        {jobOffers.map((item) => {
          console.log(item);
          return (
            <div key={JSON.stringify(item)}>
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
            </div>
            
          );
        })}
      </div>
    </>
  );
};

export default JobOffers;
