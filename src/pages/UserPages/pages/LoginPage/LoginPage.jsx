import React from 'react';
import './LoginStyle.scss';
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../api/usersApi';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';


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
            console.log(err);
        }
    }

    return (
        <>
            <div className='c-content'>
                <div className='b-img-login'>
                    <img className='b-img-login__image' src="images/logo-layout/group7.png" alt="Logo" />
                </div>

                <form className='b-form' onSubmit={handleSubmit(submint)}>
                    <Box component="form" sx={{
                        '& .MuiTextField-root': { m: 1, width: '18rem' },
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '0.7rem' }
                    }}
                        noValidate
                        autoComplete="on">
                        <div className='b-form__content'>
                            <label htmlFor='email'>Email</label>
                            <TextField
                                required
                                id="outlined-required"
                                name='email'{...register('email')} />
                        </div>
                        <div className='b-form__content'>
                            <label htmlFor='password'>Contraseña</label>
                            <TextField
                                id="outlined-password-input"
                                type="password"
                                autoComplete="current-password"
                                name='password'{...register('password')}
                            />
                        </div>
                    </Box>
                    <div className='b-button-submit'>
                        <button style={{ backgroundColor: 'transparent', border: 'none' }} type='submit'><ButtonLigth></ButtonLigth></button>
                    </div>
                </form>
                <div className='b-content-info'>
                    <p className='b-content-info__text'>¿No puedes iniciar sesión? <span className='b-content-info__link'>Restablecer la contraseña</span></p>
                </div>
                <div className='b-line'>
                    <img className='b-line__img' src="images/logo-layout/line-login.png" alt="logo" />
                </div>
                <div className='b-register'>
                    <p className='b-register__text'onClick={()=>{navigate('/register')}}>Crear nueva cuenta</p>
                </div>
            </div>
        </>
    )
}