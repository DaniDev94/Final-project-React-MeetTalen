import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../../api/usersApi';
import { Password } from 'primereact/password';


export default function RegisterPage() {


    const [password, setPassword] = useState();

    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        addUser(data);
    }

    const addUser = async (user) => {
        try {
            const newUser = await registerUser(user);
            if (newUser) {
                console.log('aqui navegaremos a login');
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <fieldset>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label htmlFor='name'>Nombre de empresa</label>
                        <input type='text' name='name' {...register('name')} />
                    </div>
                    <div>
                        <label htmlFor='CEO'>CEO</label>
                        <input type='text' name='CEO' {...register('CEO')} />
                    </div>
                    <div>
                        <label htmlFor='CEO_image'>Avatar</label>
                        <input type='file' name='CEO_image' {...register('image')} />
                    </div>
                    <div>
                        <label htmlFor='CIF'>CIF</label>
                        <input type='text' name='CIF' {...register('CIF')} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' {...register('email')} />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <Password name='password' promptLabel='Por favor, ingrese su contraseña' value={password} {...register('password')} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="checkbox" name="privacity" />
                        <label htmlFor="privacity">Al crear una cuenta, acepta automáticamente todos los términos y condiciones relacionados con meeTTalent</label>
                    </div>
                    <div>
                        <input type='submit' value='Continuar' />
                    </div>
                </form>
            </fieldset>
        </div>)
}






















































