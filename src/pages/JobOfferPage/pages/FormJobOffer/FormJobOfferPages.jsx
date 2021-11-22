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
      <Helmet>

        <style>{'body { background-color: #d9d9db; }'}</style>

      </Helmet>
      <div className="c-back">

        <ChevronLeftIcon className="c-back" onClick={() => { navigate('/joboffer') }}></ChevronLeftIcon>
        <h2>Descripción de la oferta</h2>

      </div>
      <form className="c-form" onSubmit={handleSubmit(submit)}>
        <label className="c-row" htmlFor="oferta"></label>
        <TextField className="c-Text" id="outlined-basic" label="Oferta" variant="outlined" {...register("jobInformation.jobTitle")} />
        <label className="c-row" htmlFor="languages"></label>
        <TextField className="c-Text" id="outlined-basic" label="Idiomas" variant="outlined" {...register("jobInformation.languages")} />
        <label className="c-row" htmlFor="city"></label>
        <TextField className="c-Text" id="outlined-basic" label="Ciudad" variant="outlined" {...register("jobInformation.city")} />
        <label className="c-row" htmlFor="vacancyNumbers"></label>
        <TextField className="c-Text" id="outlined-basic" label="Vacantes" variant="outlined"  {...register("jobInformation.vacancyNumbers")} />

        <FormControl sx={{ m: 1.5, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-label" >Sector</InputLabel>
          <Select
            className="c-Text"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sector"

            name="jobInformation.sector"
            {...register("jobInformation.sector")}

          >
            <MenuItem value="Diseño Ux/Ui" >Diseño Ux/Ui</MenuItem>
            <MenuItem value="Desarrollo Web">Desarrollo Web</MenuItem>
            <MenuItem value="Ciberseguridad">Ciberseguridad</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1.5, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-label" >Estudios</InputLabel>
          <Select
            className="c-Text"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Estudios"

            name="jobInformation.training"
            {...register("jobInformation.training")}

          >
            <MenuItem value="Grado Medio" >Grado Medio</MenuItem>
            <MenuItem value="Grado Superior">Grado Superior</MenuItem>
            <MenuItem value="Grado Superior">Grado Superior</MenuItem>
            <MenuItem value="Master">Master</MenuItem>
            <MenuItem value="Licenciatura">Licenciatura</MenuItem>
            <MenuItem value="Sin formación">Sin formación</MenuItem>
          </Select>
        </FormControl>


        <label className="c-row" htmlFor="jobDescription"></label>
        <TextField className="c-Text" id="outlined-basic" label="Condiciones laborales" variant="outlined" {...register("jobInformation.jobDescription")} />

        <label className="c-row" htmlFor="salary"></label>
        <TextField className="c-Text" id="outlined-basic" label="Salario" variant="outlined"{...register("jobInformation.salary")} />

        <label className="c-row" htmlFor="workingHours"></label>
        <TextField className="c-Text" id="outlined-basic" label="Horas" variant="outlined"  {...register("jobInformation.workingHours")} />

        <label className="c-row" htmlFor="contract"></label>
        <TextField className="c-Text" id="outlined-basic" label="Tipo de contrato" variant="outlined" {...register("jobInformation.contract")} />

        <div>
          <input type="submit" value="Continuar" />
        </div>
      </form>

      <Navbar></Navbar>
    </>
  );
};
export default FormJobOffers;
