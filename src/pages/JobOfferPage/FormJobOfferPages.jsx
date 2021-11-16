import React, { useState } from "react";
import { postJobOffers } from "../../api/jobOfferApi";

const INITIAL_STATE = {
  name: "",
  residents: "",
  img: "",
};

const FormJobOffers = (props) => {
  const [jobOffer, setJobOffer] = useState(INITIAL_STATE);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setJobOffer({ ...jobOffer, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    postJobOffers();
  };

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
              <select>
                <option>Español </option>
                <option>Inglés</option>
                <option>Alemán</option>
                <option>Otros</option>
              </select>
              <select>
                <option>Español </option>
                <option>Inglés</option>
                <option>Alemán</option>
                <option>Otros</option>
              </select>
              <select>
                <option>Español </option>
                <option>Inglés</option>
                <option>Alemán</option>
                <option>Otros</option>
              </select>
              <input type="text" placeholder="otros" onChange={handleInput} />
            </label>
            <label>
              <p>Sector</p>
              <input type="text" placeholder="sector" onChange={handleInput} />
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
