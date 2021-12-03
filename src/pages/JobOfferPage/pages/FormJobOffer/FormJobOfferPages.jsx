import React from "react";
import { useForm } from "react-hook-form";
import { postJobOffers } from "../../../../api/jobOfferApi";
import '../FormJobOffer/FormJobOffer.scss'
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { ChevronLeftIcon } from '@chakra-ui/icons';
import ButtonDark from "../../../../components/ButtonDark/ButtonDark";
import { Form } from 'react-bootstrap'



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

        <style>{'body { background-color: rgb (248, 250, 251) }'}</style>

      </Helmet>

      <div className="b-title-offer">
        <div className="b-iconcontainer">
          <ChevronLeftIcon sx={{ fontSize: '1.6rem' }} className="f-back" onClick={() => { navigate('/joboffer') }}></ChevronLeftIcon>
        </div>


        <div>
          <h2 className="b-title-job" >Descripción de la oferta</h2>
        </div>
      </div>

      <div className="c-container-form-job">
        <form onSubmit={handleSubmit(submit)}>
          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Título</Form.Label>
              <Form.Control type="text" className="b-input-job" placeholder="Oferta" name='ofert'{...register('jobInformation.jobTitle')} />
            </Form.Group>
          </div>


          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Idioma</Form.Label>
              <Form.Control type="text" className="b-input-job" placeholder="Idioma" name='languages'{...register('jobInformation.languages')} />
            </Form.Group>
          </div>

          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Ciudad</Form.Label>
              <Form.Control type="text" className="b-input-job" placeholder="Ciudad" name='city'{...register('jobInformation.city')} />
            </Form.Group>
          </div>

          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Vacantes</Form.Label>
              <Form.Control type="number" className="b-input-job" placeholder="Vacantes" name='vacancyNumbers'{...register('jobInformation.vacancyNumbers')} />
            </Form.Group>
          </div>


          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Sector</Form.Label>
              <Form.Select className="b-job-drop" name="jobInformation.sector"
                {...register("jobInformation.sector")}>
                <option className="b-job-drop">Diseño Ux/Ui</option>
                <option className="b-job-drop">Desarrollo Web</option>
                <option className="b-job-drop">Ciberseguridad</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Estudios</Form.Label>
              <Form.Select className="b-job-drop" name="jobInformation.training"
                {...register("jobInformation.training")}>
                <option className="b-job-drop">Master</option>
                <option className="b-job-drop">Licenciatura</option>
                <option className="b-job-drop">Grado Superior</option>
                <option className="b-job-drop">Grado Medio</option>
                <option className="b-job-drop">Sin formación</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Salario</Form.Label>
              <Form.Control type="number" className="b-input-job" placeholder="Salario" name='terms.salary'{...register('jobInformation.terms.salary')} />
            </Form.Group>
          </div>

          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Horas</Form.Label>
              <Form.Control type="number" className="b-input-job" placeholder="Horas" name='terms.workingHours'{...register('jobInformation.terms.workingHours')} />
            </Form.Group>
          </div>

          <div className="b-form-container-min">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='ofert' className="b-jobtitle">Terminos</Form.Label>
              <Form.Control type="text" className="b-input-job" placeholder="Conciones" name='terms.contract'{...register('jobInformation.terms.contract')} />
            </Form.Group>
          </div>

          <div className='b-button-submit-job'>
            <button style={{ backgroundColor: 'transparent', border: 'none' }} type='submit'><ButtonDark></ButtonDark></button>
          </div>
        

        </form>
      </div>

    </>
  );
};
export default FormJobOffers;
