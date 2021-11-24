import React, { useState } from 'react';
import './LoginStyle.scss';
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../api/usersApi';
import { IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


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

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='c-content'>
                <div  className='b-card'>
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
                                <OutlinedInput
                                    sx={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '2.88rem', width: '18rem', m: 1 }}
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={values.password}
                                    name='password'{...register('password')}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
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
                        <img className='b-line__img' src="images/logo-layout/line-login-2.png" alt="logo" />
                    </div>
                    <div className='b-register'>
                        <p className='b-register__text' onClick={() => { navigate('/register') }}>Crear nueva cuenta</p>
                    </div>
                </div>
            </div>
        </>
    )
}