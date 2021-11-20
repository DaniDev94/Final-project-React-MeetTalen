import React from "react";
import { useForm } from "react-hook-form";
import { postJobOffers } from "../../../../api/jobOfferApi";
import '../FormJobOffer/FormJobOffer.scss'
import { Helmet } from "react-helmet";
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
    <Helmet>

<style>{'body { background-color: #d9d9db; }'}</style>

</Helmet>
      <form className= "c-form" onSubmit={handleSubmit(submit)}>
        <h2>Descripción de la oferta</h2>
      
        <label className = "c-row" htmlFor="jobTitle">Oferta:</label>
        <input className= "c-input" type="text" name="jobInformation.jobTitle" {...register("jobInformation.jobTitle")} />

        <label className = "c-row" htmlFor="languages">Idiomas:</label>
        <input className= "c-input" type="text" name="jobInformation.languages" {...register("jobInformation.languages")} />

        <label  className = "c-row" htmlFor="vacancyNumbers">Vacantes:</label>
        <input className= "c-input" 
          type="text"
          name="jobInformation.vacancyNumbers"
          {...register("jobInformation.vacancyNumbers")}
        />

        <label className = "c-row" htmlFor="sector">Sector:</label>
        
        <select className= "c-input"  name="jobInformation.sector" {...register("jobInformation.sector")}>
          <option value =" Diseño Ux/Ui">Diseño Ux/Ui </option>
          <option value ="Desarrollo web">Desarrollo Web</option>
          <option value= "Ciberseguridad">Ciberseguridad</option>
        </select>

        <label className = "c-row" htmlFor="training">Estudios:</label>
        
        <select className= "c-input"  name="jobInformation.training" {...register("jobInformation.training")}>
          <option value ="Grado Medio">Grado Medio</option>
          <option value ="Grado Superior">Grado Superior</option>
          <option value= "Master">Master</option>
          <option value= "Licenciatura">Licenciatura</option>
          <option value= "Sin formación">Sin formación</option>
        </select>

        <label  className = "c-row" htmlFor="jobDescription">Condiciones laborales:</label>
        <input className= "c-input" 
          type="text"
          name="jobInformation.jobDescription"
          {...register("jobInformation.jobDescription")}
        />

        <label className = "c-row" htmlFor="salary">Salario:</label>
        <input className= "c-input" type="number" name="jobInformation.terms.salary" {...register("jobInformation.terms.salary")} />

        <label className = "c-row" htmlFor="workingHours">Horas:</label>
        <input className= "c-input" type="number" name="jobInformation.terms.workingHours" {...register("jobInformation.terms.workingHours")} />

        <label className = "c-row" htmlFor="contract">Tipo de contrato:</label>
        <input className= "c-input" type="text" name="jobInformation.terms.contract" {...register("jobInformation.terms.contract")} />

        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>

      <Navbar></Navbar>
    </>
  );
};
export default FormJobOffers;
