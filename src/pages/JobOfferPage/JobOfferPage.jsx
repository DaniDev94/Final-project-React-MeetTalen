import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getJobOffers } from "../../api/jobOfferApi";
import Navbar from "../../components/Navbar/NavbarPage";
import './JobOfferPage.scss';

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
    
      <h1>Ofertas de trabajo</h1>

      <div>
        {jobOffers.map((item) => {
          console.log(item);
          return (
            <div className="card">
              <div key={JSON.stringify(item)}>
                <Link to={{ pathname: "/joboffer/" + item._id }}>
                  <h2> {item.jobInformation.jobTitle}</h2>
                  <p> Vacantes: {item.jobInformation.vacancyNumbers}</p>
                  
                </Link>
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
