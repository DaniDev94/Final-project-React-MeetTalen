import React from 'react'

const JobOffer = () => {
    



    const submitForm =  (e) => {
        e.preventDefault();
        JobOffer()
    }


    return(
    <>
       <form onSubmit={submitForm}>
                <fieldset>
                <div>
                <h2>Descripción</h2>
                    <label>
                        <p>Oferta</p>
                        <input type='text' name='name' value= "nombre oferta"  />
                    </label>
                    <label>
                        <p>Ciudad</p>
                        <input type='text' name='race' value= "city"  />
                    </label>
                    <label>
                        <p>Pais</p>
                        <input type='text' name='origin' value="country" />
                    </label>
                    </div>
                    <div>
                    <h2>Condiciones</h2>
                    <label>
                        <p>Disponibilidad</p>
                        <input type='text' name='father' value="Avaliabity"  />
                    </label>
                    <label>
                        <p>Salario</p>
                        <input type='text' name='father' value="salary" />
                    </label>
                    <label>
                        <p>Jornada</p>
                        <input type='text' name='father' value="workingDay"  />
                    </label>
                    <label>
                        <p>Contrato</p>
                        <input type='text' name='father' value="contract"  />
                    </label>
                    <label>
                        <p>Vacantes</p>
                        <input type='text' name='vacancies' value="contract"  />
                    </label>
                    <label>
                        <p>Idiomas</p>
                        <input type='text' name='languaje' value="contract"  />
                    </label>
                    </div>
            </fieldset>
            </form>
    </>
    )
}
export default JobOffer