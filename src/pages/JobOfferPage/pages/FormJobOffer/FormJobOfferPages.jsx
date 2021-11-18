import React from "react";
import { useForm } from "react-hook-form";
import { postJobOffers } from "../../../../api/jobOfferApi";


import Navbar from "../../../../components/Navbar/NavbarPage";

const FormJobOffers = () => {
  const { register, handleSubmit } = useForm();
  
  const submit = (data) => {
    
    const formData = new FormData();
    formData.append("jobTitle", data.jobTitle);
    formData.append("vacancyNumbers", data.vacancyNumbers);
    formData.append("languages", data.languages);
    formData.append("sector", data.sector);
    formData.append("training", data.training);
    formData.append("jobDescription", data.jobDescription);
    formData.append("terms", data.terms.salary);
    formData.append("terms", data.terms.workingHours);
    formData.append("terms", data.terms.contract);
 
    addJoboffer(formData);
  };

  const addJoboffer = async (jobOffer) => {
    try {
      const newJobOffer = await postJobOffers(jobOffer);
      if (newJobOffer) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Descripción</h2>

        <label htmlFor="jobTitle">Oferta:</label>
        <input type="text" name="jobTitle" {...register("jobTitle")} />

        <label htmlFor="languages">Número de vacantes:</label>
        <input type="text" name="languages" {...register("languages")} />

        <label htmlFor="vacancyNumbers">idiomas:</label>
        <input
          type="text"
          name="jobvacancyNumbersTitle"
          {...register("vacancyNumbers")}
        />

        <label htmlFor="sector">Sector:</label>
        <input type="text" name="sector" {...register("sector")} />

        <select>
          <option>Diseño Ux/Ui </option>
          <option>Desarrollo Web</option>
          <option>Ciberseguridad</option>
        </select>

        <label htmlFor="training">Estudios:</label>
        <input type="text" name="training" {...register("training")} />

        <label htmlFor="jobDescription">Condiciones laborales:</label>
        <input
          type="text"
          name="jobDescription"
          {...register("jobDescription")}
        />

        <label htmlFor="salary">Salario:</label>
        <input type="text" name="salary" {...register("salary")} />

        <label htmlFor="workingHours">Horas:</label>
        <input type="text" name="workingHours" {...register("workingHours")} />

        <label htmlFor="contract">Tipo de contrato:</label>
        <input type="text" name="contract" {...register("contract")} />

        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>

      <Navbar></Navbar>
    </>
  );
};
export default FormJobOffers;