import React from 'react'

const Login = () => {
    return(
    <>
        <fieldset>
                
                    <label>
                        <p>Email ID</p>
                        <input type='text' name='name' value= "Email ID"  />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input type='text' name='name' value= "Contraseña"  />
                    </label>

                    <div>
                        <button type='submit'>Comenzar</button>
                    </div>

                    <p>¿No puedes iniciar sesión? Restablecer la contraseña</p>
                    <p>o</p>
                    <p>Crear nueva cuenta</p>
        </fieldset>
    </>
    )
}
export default Login