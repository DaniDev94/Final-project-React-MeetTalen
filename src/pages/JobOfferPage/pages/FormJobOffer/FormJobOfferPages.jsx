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
import { ChevronLeftIcon } from '@chakra-ui/icons';
import ButtonDark from "../../../../components/ButtonDark/ButtonDark";
import { ThemeProvider } from '@mui/private-theming';
import { createTheme, IconButton, InputAdornment, OutlinedInput} from '@mui/material';

import { Box } from '@mui/material';


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
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 576,
        desktop: 778,
      },
    },
  });

  return (
    <>
      <Helmet>

        <style>{'body { background-color: #eaeaeb }'}</style>

      </Helmet>
      <div className="f-back">

        <ChevronLeftIcon className="f-back" onClick={() => { navigate('/joboffer') }}></ChevronLeftIcon>
        <h2 className="f-title" >Descripción de la oferta</h2>

      </div>
      <form className='f-format' onSubmit={handleSubmit(submit)}>
        <ThemeProvider theme={theme}>
          <Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '18rem' },
            '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '0.7rem' }
          }}
            noValidate
            autoComplete="on">
            <div className='f-format__content'>
              <label htmlFor='oferta'>Oferta</label>
              <TextField
                required
                id="outlined-required"
                name='oferta'{...register('jobInformation.jobTitle')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='languages'>Idiomas</label>
              <TextField
                required
                id="outlined-required"
                name='languages'{...register('jobInformation.languages')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='city'>Ciudad</label>
              <TextField
                required
                id="outlined-required"
                name='city'{...register('jobInformation.city')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='vacancyNumbers'>Vacantes</label>
              <TextField
                required
                id="outlined-required"
                name='vacancyNumbers'{...register('jobInformation.vacancyNumbers')} />
            </div>
            <div className="FormLabel">
            <FormControl sx={{ m: 1.5, minWidth: 220 }}>
              <InputLabel id="demo-simple-select-label" >Sector</InputLabel>
              <Select
                className="f-Text"
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
                className="f-Text"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Estudios"

                name="jobInformation.training"
                {...register("jobInformation.training")}

              >
                <MenuItem value="Grado Medio" >Grado Medio</MenuItem>
                <MenuItem value="Grado Superior">Grado Superior</MenuItem>
                <MenuItem value="Master">Master</MenuItem>
                <MenuItem value="Licenciatura">Licenciatura</MenuItem>
                <MenuItem value="Sin formación">Sin formación</MenuItem>
              </Select>
            </FormControl>
            </div>
            <div className='f-format__content'>
              <label htmlFor='jobDescription'>Condiciones</label>
              <TextField
                required
                id="outlined-required"
                name='jobDescription'{...register('jobInformation.jobDescription')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='vacancyNumbers'>Vacantes</label>
              <TextField
                required
                id="outlined-required"
                name='vacancyNumbers'{...register('jobInformation.vacancyNumbers')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='terms.salary'>Salario</label>
              <TextField
                required
                id="outlined-required"
                name='terms.salary'{...register('jobInformation.terms.salary')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='terms.workingHours'>Horas</label>
              <TextField
                required
                id="outlined-required"
                name='terms.workingHours'{...register('jobInformation.terms.workingHours')} />
            </div>
            <div className='f-format__content'>
              <label htmlFor='terms.contract'>Horas</label>
              <TextField
                required
                id="outlined-required"
                name='terms.contract'{...register('jobInformation.terms.contract')} />
            </div>
            <div>
              <button className="c-black" style={{ backgroundColor: 'transparent', border: 'none' }} type="submit" value="Continuar"> <ButtonDark></ButtonDark></button>
            </div>

          </Box>
        </ThemeProvider>
      </form>


    </>
  );
};
export default FormJobOffers;
