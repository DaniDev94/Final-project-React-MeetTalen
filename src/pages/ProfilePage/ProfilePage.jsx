import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../api/usersApi";
import './ProfileStyle.scss';
import Navbar from "../../components/Navbar/NavbarPage";
import { Helmet } from "react-helmet";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';



export default function ProfilePage() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    console.log(user)

    const getInfoUser = async () => {
        try {
            const dataUser = await getUserById();
            setUser(dataUser.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getInfoUser();
    }, []);


    //SUb Menu Profile
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Helmet>
                <style>{'body { background-color: #f8fafb; }'}</style>
            </Helmet>
            <div className='c-header' >
                <h2 className='c-header__text'>Administradores</h2>
            </div>
            <div className='c-info'>
                <div className='b-profile-sub'>
                    <p className='b-profile-sub__text'>Empresa</p>
                </div>
                <div className='b-profile-title'>
                    <h1 className='b-profile-title__text'>{user.name}</h1>
                </div>
                <div className='b-profile-img'>
                    <img className='b-profile-img__image' src={user.image} alt={user.name} />
                </div>
                <div className='b-profile-ceo'>
                    <h1 className='b-profile-ceo__text'>{user.CEO}</h1>
                </div>
                <div className='b-profile-line'>
                    <hr className='b-profile-line__img'></hr>
                </div>
                <div className='b-menu'>
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ borderRadius: '3rem', color: 'white' }}
                    >
                        <AddCircleIcon sx={{ fontSize: '5rem' }} />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem sx={{ color: '#0d202a', fontFamily: '"Montserrat", sans-serif' }} onClick={() => { navigate('/candidates') }}>Candidatos</MenuItem>
                        <MenuItem sx={{ color: '#0d202a', fontFamily: '"Montserrat", sans-serif' }} onClick={() => { navigate('/joboffer/create') }}>Crear Oferta</MenuItem>
                        <MenuItem sx={{ color: '#0d202a', fontFamily: '"Montserrat", sans-serif' }} onClick={() => { navigate('/joboffer') }}>Ofertas</MenuItem>
                        <MenuItem sx={{ color: '#0d202a', fontFamily: '"Montserrat", sans-serif' }} onClick={() => { navigate('/login') }}>Cerrar sesión</MenuItem>
                    </Menu>
                </div>
                <div className='b-text-fake'>
                    <p className='b-text-fake__content'>Añade más administradores con la versión premium </p>
                </div>
                <Navbar></Navbar>
            </div>
        </>
    )
}