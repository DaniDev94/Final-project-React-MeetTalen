import React from 'react'
import './InfoThreeStyle.scss'
import { useNavigate } from 'react-router-dom';
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth'


export default function InfoThreePage() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='c-container'>
                <div className='b-image-three'>
                    <img className='b-image__img' src="images/logo-layout/infoThreeImg.png" alt="logo" />
                </div>
                <div className='b-info-text'>
                    <p className='b-info-text__content'>Agilizar tus procesos de selección de una manera sencilla, potente y rápida</p>
                </div>
                <div onClick={() => { navigate('/login') }} className='b-button-three'>
                    <ButtonLigth></ButtonLigth>
                </div>
            </div>
        </div>
    )
}
