import React, { useState } from 'react';
import './RegisterStyle.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../../api/usersApi';
import { Helmet } from 'react-helmet';
import ButtonDark from '../../../../components/ButtonDark/ButtonDark';
import { Avatar, IconButton, Input, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { PhotoCamera, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';


export default function RegisterPage() {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    //Show avatar image
    const [fileUrl, setFileUrl] = useState(null);
    
    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl);
    }
    
    //Privacy policy validation
    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    }

    const btnHandler = () => {
        alert('The buttion is clickable!');
    };


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
                navigate('/login');
            }
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
            <Helmet>
                <style>{'body { background-color: #f8fafb; }'}</style>
            </Helmet>
            <div className='c-container-register'>
                <div className='b-title-create'>
                    <h2 className='b-title-create__text'>Crear cuenta</h2>
                </div>
                <form className='b-form-register' onSubmit={handleSubmit(submit)}>
                    <Box component="form" sx={{
                        '& .MuiTextField-root': { m: 1, width: '18rem' },
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '0.7rem' }
                    }}
                        noValidate
                        autoComplete="on">
                        <div className='b-form-register-file'>
                            <Avatar alt='user-avatar' src={fileUrl} sx={{ width: 60, height: 60 }} />
                            <div className='b-form-register-file__icon'>
                                <label htmlFor="icon-button-file">
                                    <Input sx={{ display: 'none' }} accept="image/*" id="icon-button-file" type="file" name='image' {...register('image')} onChange={processImage} />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                            </div>
                        </div>










                        <div className='b-form-register__input'>
                            <label htmlFor='name'>Nombre de empresa</label>
                            <TextField
                                required
                                id="outlined-required"
                                name='name' {...register('name')} />
                        </div>


                        <div className='b-form-register__input'>
                            <label htmlFor='CEO'>CEO</label>
                            <TextField
                                required
                                id="outlined-required"
                                name='CEO' {...register('CEO')} />
                        </div>






                        <div className='b-form-register__input'>
                            <label htmlFor='CIF'>CIF</label>
                            <TextField
                                required
                                id="outlined-required"
                                name='CIF' {...register('CIF')} />
                        </div>




                        <div className='b-form-register__input'>
                            <label htmlFor='email'>Email</label>
                            <TextField
                                required
                                id="outlined-required"
                                name='email' {...register('email')} />
                        </div>





                        <div className='b-form-register__input'>
                            <label htmlFor='password'>Contraseña</label>
                            <OutlinedInput
                                sx={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '2.88rem', width: '18rem', m: 1 }}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                value={values.password}
                                name='password' {...register('password')}
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



                        <div className='b-form-check'>
                            <input type="checkbox" id="privacity" onChange={checkboxHandler}/>
                            <label htmlFor="privacity">Al crear una cuenta, acepta automáticamente todos los
                                <a href='https://www.privacypolicies.com/live/65cfd7c6-b49b-4ad9-8650-4150e86c10fd'> términos y condiciones </a> relacionados con meeTTalent</label>
                        </div>







                    </Box>
                    <div className='b-button-submit'>
                        <button disabled={!agree} onClick={btnHandler} style={{ backgroundColor: 'transparent', border: 'none' }} type='submit'>
                            <ButtonDark></ButtonDark>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}






















































