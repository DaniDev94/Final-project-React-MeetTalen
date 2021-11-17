import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../../api/usersApi';



export default function RegisterPage() {


    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('CEO', data.CEO);
        formData.append('image', data.image[0]);
        formData.append('CIF', data.CIF);
        formData.append('email', data.email);
        formData.append('password', data.password);
        addUser(formData);
    }

    const addUser = async (user) => {
        try {
            const newUser = await registerUser(user);
            if (newUser) {
                console.log('aqui navegaremos a login');
            }
        } catch (err) {
            console.log(err);
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
                        <label htmlFor='image'>Avatar</label>
                        <input type='file' name='image' {...register('image')} />
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
                        <input type='password' name='password' {...register('password')} />
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
        </div>
    );
}






















































