import React from 'react'
import './InfoTwoStyle.scss'
import { useNavigate } from 'react-router-dom';
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth'


export default function InfoTwoPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className='c-container'>
                <div className='b-image'>
                    <img className='b-image__img' src="images/logo-layout/infoTwoImg.png" alt="logo" />
                </div>
                <div className='b-info'>
                    <p className='b-info__content'>Crear eventos únicos para  interactuar con los cantidatos desde cualquier lugar</p>
                </div>
                <div onClick={() => { navigate('/login') }} className='b-button-two'>
                    <ButtonLigth></ButtonLigth>
                </div>
            </div>
        </>
    )
}
