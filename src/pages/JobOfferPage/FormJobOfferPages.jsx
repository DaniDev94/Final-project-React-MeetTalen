import React, { useState } from "react";
import { postJobOffers } from "../../api/jobOfferApi";
import { useNavigate } from 'react-router-dom';
 
const INITIAL_STATE = {
  name: "",
  residents: "",
  img: "",
};

const FormJobOffers = (props) => {
  const [jobOffer, setJobOffer] = useState(INITIAL_STATE);
 const navigate= useNavigate()
  const handleInput = (e) => {
    const { name, value } = e.target;
    setJobOffer({ ...jobOffer, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addJoboffer();
  };
 const addJoboffer = async () => {
    try {
        const newJobOffer = await postJobOffers(jobOffer)
        if (newJobOffer) {
           
 /*           navigate('/jobOffers') */
        }
    } catch (error) {
        console.error(error)
    }
}


  return (
    <>
      <form onSubmit={submitForm}>
        <fieldset>
          <div>
            <h2>Descripción</h2>
            <label>
              <p>Oferta</p>
              <input type="text" placeholder="oferta" onChange={handleInput} />
            </label>
            <label>
              <p>Número de vacantes</p>
              <input
                type="text"
                placeholder="vacancyNumbers"
                onChange={handleInput}
              />
            </label>
            <label>
              <p>Idiomas</p>
              
              <input type="text" placeholder="idiomas" onChange={handleInput} />
            </label>
            <label>
              <p>Sector</p>
              
              <select>
                <option>Diseño Ux/Ui </option>
                <option>Desarrollo Web</option>
                <option>Ciberseguridad</option>
               
              </select>
            </label>
            <label>
              <p>Estudios</p>
              <input
                type="text"
                placeholder="training"
                onChange={handleInput}
              />
            </label>
            <label>
              <p>Condiciones laborales</p>
              <label
                for="description"
                placeholder="jobDescription"
                onChange={handleInput}
              />
              <textarea id="description"></textarea>
            </label>
            <p>Salario</p>

            <label>
              <input type="text" placeholder=".salary" onChange={handleInput} />
            </label>
            <p>Horas</p>
            <label>
              <input
                type="text"
                placeholder="workingHours"
                onChange={handleInput}
              />
            </label>
            <p>Tipo de contrato</p>
            <label>
              <input
                type="text"
                placeholder="contract"
                onChange={handleInput}
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    </>
  );
};
export default FormJobOffers;
