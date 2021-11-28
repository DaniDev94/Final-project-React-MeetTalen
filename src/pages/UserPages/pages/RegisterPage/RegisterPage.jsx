import React, { useState } from 'react';
import './RegisterStyle.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../../api/usersApi';
import { Helmet } from 'react-helmet';
import { Checkbox, IconButton, InputAdornment, Modal, OutlinedInput, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff, AddAPhoto } from '@mui/icons-material';
import { Box, createTheme, style } from '@mui/system';
import { ThemeProvider } from '@mui/private-theming';
import ButtonDark from '../../../../components/ButtonDark/ButtonDark';



export default function RegisterPage() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    //Show avatar image

    const [fileUrl, setFileUrl] = useState(null);

    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageSave = [];
        imageSave.push(imageFile)
        const imageUrl = URL.createObjectURL(new Blob(imageSave, { type: "image/*" }));
        setFileUrl(imageUrl);
    }


    //Breakpoints (Media queries - mui)
    const theme = createTheme({
        breakpoints: {
            values: {
                mobile: 576,
                desktop: 778,
            },
        },
    });


    //Privacy policy validation modal

    const [agree, setAgree] = useState(false);
    console.log(agree)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const checkboxHandler = () => {
        setAgree(!agree);
    }


    const btnHandler = () => {
        handleOpen();
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: '#00b3cd',
        borderRadius: '1rem',
        border: '2px solid #0d202a',
        boxShadow: 24,
        p: 4,
    };

    //------------------------------->

    const submit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('CEO', data.CEO);
        formData.append('image', data.image[0]);
        formData.append('CIF', data.CIF);
        formData.append('email', data.email);
        formData.append('password', data.password);
        if (agree === false) {
            return null
        } else {
            addUser(formData);
        }
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
                <div className='b-card-desktop'>
                    <div className='b-title-create'>
                        <h2 className='b-title-create__text'>Crear cuenta</h2>
                    </div>
                    <form className='b-form-register' onSubmit={handleSubmit(submit)}>
                        <ThemeProvider theme={theme}>
                            <Box component="form" sx={{
                                '& .MuiTextField-root': { m: 1, width: { mobile: '18rem', desktop: '35rem' } },
                                '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '0.7rem' },
                                '& .css-1jz90xz-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': { color: '#00b3cd'}
                            }}
                                noValidate
                                autoComplete="on">
                                <div className='c-upload-avatar'>
                                    <div className='c-upload-avatar__content'>
                                        <div className='b-input-img'>
                                            {fileUrl ? <img className='b-input-img__image' src={fileUrl} alt="avatar" /> : <img className='b-input-img__image' src="images/logo-layout/user-pre.png" alt='empty avatar' />}
                                        </div>
                                        <div className='b-input-file'>
                                            <label className='b-input-file__label' htmlFor="icon-button-file" onChange={processImage}>
                                                <input className='b-input-file__input' type="file" id="icon-button-file" accept="image/*" name='image' {...register('image')} />
                                                <div className='b-input-file__icon'>
                                                    <AddAPhoto sx={{ fontSize: '1.3rem' }}></AddAPhoto>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='b-form-register__input'>
                                    <label htmlFor='name'>Nombre de empresa</label>
                                    <TextField
                                        required
                                        placeholder={errors.name && errors.name.message.placeName}
                                        id="outlined-required"
                                        name='name' {...register('name', {
                                            required: {
                                                value: true,
                                                message: {
                                                    placeName: "Nombre requerido"
                                                },
                                            },
                                            pattern: {
                                                value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ .'-]{2,20}$/,
                                                message: {
                                                    nameOne: "Debe contener entre 8-20 caracteres",
                                                    nameTwo: "No puede contener caracteres especiales salvo: .'-"
                                                }
                                            }
                                        })}
                                    />
                                    {errors.name &&
                                        <div className='b-error'>
                                            <span className='b-error__text'>{errors.name.message.nameOne}</span>
                                            <span className='b-error__text'>{errors.name.message.nameTwo}</span>
                                        </div>
                                    }
                                </div>
                                <div className='b-form-register__input'>
                                    <label htmlFor='CEO'>CEO</label>
                                    <TextField
                                        required
                                        placeholder={errors.CEO && errors.CEO.message.placeCEO}
                                        id="outlined-required"
                                        name='CEO' {...register('CEO', {
                                            required: {
                                                value: true,
                                                message: {
                                                    placeCEO: "CEO requerido"
                                                },
                                            },
                                            pattern: {
                                                value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ .'-]{8,20}$/,
                                                message: {
                                                    ceoOne: "Debe contener entre 8-20 caracteres",
                                                    ceoTwo: "No puede contener caracteres especiales salvo: .'-"
                                                }
                                            }
                                        })} />
                                    {errors.CEO &&
                                        <div className='b-error'>
                                            <span className='b-error__text'>{errors.CEO.message.ceoOne}</span>
                                            <span className='b-error__text'>{errors.CEO.message.ceoTwo}</span>
                                        </div>}
                                </div>
                                <div className='b-form-register__input'>
                                    <label htmlFor='CIF'>CIF</label>
                                    <TextField
                                        required
                                        placeholder={errors.CIF && errors.CIF.message.placeCIF}
                                        id="outlined-required"
                                        name='CIF' {...register('CIF', {
                                            required: {
                                                value: true,
                                                message: {
                                                    placeCIF: "CIF requerido"
                                                },
                                            },
                                            pattern: {
                                                value: /([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/,
                                                message: {
                                                    cifOne: "Debe contener 9 caracteres alfanuméricos",
                                                    cifTwo: "No puede contener caracteres especiales"
                                                }
                                            }
                                        })} />
                                    {errors.CIF &&
                                        <div className='b-error'>
                                            <span className='b-error__text'>{errors.CIF.message.cifOne}</span>
                                            <span className='b-error__text'>{errors.CIF.message.cifTwo}</span>
                                        </div>}
                                </div>
                                <div className='b-form-register__input'>
                                    <label htmlFor='email'>Email</label>
                                    <TextField
                                        required
                                        placeholder={errors.email && errors.email.message.placeEmail}
                                        id="outlined-required"
                                        name='email' {...register('email', {
                                            required: {
                                                value: true,
                                                message: {
                                                    placeEmail: "Email requerido"
                                                },
                                            },
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: {
                                                    email: "Por favor, introduzca una dirección de correo electrónico"
                                                }
                                            }
                                        })} />
                                    {errors.email &&
                                        <div className='b-error'>
                                            <span className='b-error__text'>{errors.email.message.email}</span>
                                        </div>}
                                </div>
                                <div className='b-form-register__input'>
                                    <label htmlFor='password'>Contraseña</label>
                                    <OutlinedInput
                                        sx={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', fontFamily: '"Montserrat", sans-serif', height: '2.88rem', width: { mobile: '18rem', desktop: '30rem' }, m: 1 }}
                                        required
                                        placeholder={errors.password && errors.password.message.placePass}
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        value={values.password}
                                        name='password' {...register('password', {
                                            required: {
                                                value: true,
                                                message: {
                                                    placePass: "Contraseña requerida"
                                                },
                                            },
                                            minLength: {
                                                value: 7,
                                                message: {
                                                    pass: "Debe contener como mínimo 7 caracteres alfanuméricos"
                                                }
                                            }
                                        })}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    sx={{ color: '#2b81a8' }}
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
                                    {errors.password &&
                                        <div className='b-error'>
                                            <span className='b-error__text'>{errors.password.message.pass}</span>
                                        </div>}
                                </div>
                                <div className='b-form-check'>
                                    <div className='b-form-check__box'>
                                        <Checkbox sx={{ padding: '0.1rem', color: '#d9d9db' }} id="privacity" onChange={checkboxHandler} />
                                    </div>
                                    <label className='b-form-check__text' htmlFor="privacity">Al crear una cuenta, acepta automáticamente todos los
                                        <a href='https://www.privacypolicies.com/live/65cfd7c6-b49b-4ad9-8650-4150e86c10fd'> términos y condiciones </a> relacionados con<a href='https://www.privacypolicies.com/live/65cfd7c6-b49b-4ad9-8650-4150e86c10fd'> meeTTalent</a></label>
                                </div>
                            </Box>
                        </ThemeProvider>
                        <div className='b-button-register'>
                            <button disabled={agree && agree == !agree} onClick={btnHandler} style={{ backgroundColor: 'transparent', border: 'none' }} type='submit'>
                                <ButtonDark></ButtonDark>
                            </button>
                        </div>
                        {agree === false ?
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <ThemeProvider theme={theme}>
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Uuups!
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2  }}>
                                            Debe aceptar la política de privacidad.
                                        </Typography>
                                    </Box>
                                </ThemeProvider>
                            </Modal> : null
                        }
                    </form>
                </div>

            </div>
        </>
    )
}






















































