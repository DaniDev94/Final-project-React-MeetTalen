import React from "react";
import { useForm } from "react-hook-form";
import { postJobOffers } from "../../../../api/jobOfferApi";


import Navbar from "../../../../components/Navbar/NavbarPage";

const FormJobOffers = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data.salary)
    const terms= {
      salary : data.salary,
      workingHours: data.workingHours,
      contract: data.contract
    }
    /* const token = localStorage.getItem('token')
    const idUser = token.id.toString()
    console.log(idUser) */

    /* const formData = new FormData();
    formData.append("jobTitle", data.jobTitle);
    formData.append("vacancyNumbers", data.vacancyNumbers);
    formData.append("languages", data.languages);
    formData.append("sector", data.sector);
    formData.append("training", data.training);
    formData.append("jobDescription", data.jobDescription);
    formData.append("terms.salary", data.salary);
    formData.append("terms.workingHours", data.workingHours);
    //formData.append("user",userId) */
    //addJoboffer(formData);
    /* console.log(data.jobInformation) */
    let job = {} 
    job.jobInformation= data.jobInformation
    /* job.user= User  */

    console.log(job)
    addJoboffer(job)
  };

  const addJoboffer = async (jobOffer) => {
    try {
      const newJobOffer = await postJobOffers(jobOffer);
      if (newJobOffer) {
        console.log('Oferta creada')
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
        <input type="text" name="jobInformation.jobTitle" {...register("jobInformation.jobTitle")} />

        <label htmlFor="languages">Idiomas:</label>
        <input type="text" name="jobInformation.languages" {...register("jobInformation.languages")} />

        <label htmlFor="vacancyNumbers">Vacantes:</label>
        <input
          type="text"
          name="jobInformation.vacancyNumbers"
          {...register("jobInformation.vacancyNumbers")}
        />

        <label htmlFor="sector">Sector:</label>
        {/* <input type="text" name="jobInformation.sector" {...register("jobInformation.sector")} /> */}

        <select name="jobInformation.sector" {...register("jobInformation.sector")}>
          <option value =" Diseño Ux/Ui">Diseño Ux/Ui </option>
          <option value ="Desarrollo web">Desarrollo Web</option>
          <option value= "Ciberseguridad">Ciberseguridad</option>
        </select>

        <label htmlFor="training">Estudios:</label>
        
        <select name="jobInformation.training" {...register("jobInformation.training")}>
          <option value ="Grado Medio">Grado Medio</option>
          <option value ="Grado Superior">Grado Superior</option>
          <option value= "Master">Master</option>
          <option value= "Licenciatura">Licenciatura</option>
          <option value= "Sin formación">Sin formación</option>
        </select>

        <label htmlFor="jobDescription">Condiciones laborales:</label>
        <input
          type="text"
          name="jobInformation.jobDescription"
          {...register("jobInformation.jobDescription")}
        />

        <label htmlFor="salary">Salario:</label>
        <input type="number" name="jobInformation.terms.salary" {...register("jobInformation.terms.salary")} />

        <label htmlFor="workingHours">Horas:</label>
        <input type="number" name="jobInformation.terms.workingHours" {...register("jobInformation.terms.workingHours")} />

        <label htmlFor="contract">Tipo de contrato:</label>
        <input type="text" name="jobInformation.terms.contract" {...register("jobInformation.terms.contract")} />

        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>

      <Navbar></Navbar>
    </>
  );
};
export default FormJobOffers;
