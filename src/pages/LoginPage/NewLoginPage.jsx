
import React from 'react'

const NewLogin = () => {
    return(
    <>
        <fieldset>
                <h3>Crear cuenta</h3>
                    <label>
                        <p>Nombre de empresa</p>
                        <input type='text' name='name' value= "Nombre de empresa"  />
                    </label>
                    <label>
                        <p>CIF</p>
                        <input type='text' name='name' value= "CIF"  />
                    </label>
                    <label>
                        <p>Email ID</p>
                        <input type='text' name='name' value= "Email ID"  />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input type='text' name='name' value= "Contraseña"  />
                    </label>
                    <label>
                        <p>Confirmar contraseña</p>
                        <input type='text' name='Confirmar contraseña' value= "Confirmar contraseña"  />
                    </label>
                    
        
                    <p>Al crear una cuenta, acepta automáticamente todos los términos y condiciones relacionados con meeTTalent</p>
                    <div>
                        <button type='submit'>Continuar</button>
                    </div>

                    
        </fieldset>
    </>
    )
}
export default NewLogin