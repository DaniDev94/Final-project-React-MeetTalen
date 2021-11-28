import React from "react";
import { useForm } from "react-hook-form";
import { postJobOffers } from "../../../../api/jobOfferApi";
import '../FormJobOffer/FormJobOffer.scss'
import { Helmet } from "react-helmet";
import Navbar from "../../../../components/Navbar/NavbarPage";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import ButtonDark from "../../../../components/ButtonDark/ButtonDark"


const FormJobOffers = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data.salary)
    const terms = {
      salary: data.salary,
      workingHours: data.workingHours,
      contract: data.contract
    }

    let job = {}
    job.jobInformation = data.jobInformation
    /* job.user= User  */

    console.log(job)
    addJoboffer(job)
  };

  const addJoboffer = async (jobOffer) => {
    try {
      const newJobOffer = await postJobOffers(jobOffer);
      if (newJobOffer) {
        console.log('Oferta creada')
        navigate('/joboffer')
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