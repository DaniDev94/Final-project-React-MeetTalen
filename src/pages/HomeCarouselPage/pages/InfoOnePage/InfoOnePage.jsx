import React from 'react';
import './InfoOneStyle.scss';
import { useNavigate } from 'react-router';
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth';


export default function InfoOnePage() {
    const navigate = useNavigate();
    return (
        <>
            <div className='c-container'>
                <div className='b-image'>
                    <img className='b-image__img' src="images/logo-layout/infoOneImg.png" alt="logo" />
                </div>
                <div className='b-text'>
                    <p className='b-text__content'>Meettalent es una herramienta que te ayuda conectar con el mejor talento</p>
                </div>
                <div onClick={() => { navigate('/login') }} className='b-button-one'>
                    <ButtonLigth></ButtonLigth>
                </div>
            </div>
        </>
    )
}
