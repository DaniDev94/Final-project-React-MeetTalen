import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../api/usersApi';


export default function LoginPage() {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const submint = (data) => {
        signIn(data);
    }

    const signIn = async (user) => {
        try {
            const getToken = await loginUser(user);
            localStorage.setItem('Token', getToken.token);
            localStorage.setItem('User', getToken.user._id);
            navigate('/profile');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <fieldset>
                <form onSubmit={handleSubmit(submint)}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email'{...register('email')} />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' name='password'{...register('password')} />
                    </div>
                    <div>
                        <input type='submit' value='Continuar' />
                    </div>
                </form>
            </fieldset>
        </div>
    )
}