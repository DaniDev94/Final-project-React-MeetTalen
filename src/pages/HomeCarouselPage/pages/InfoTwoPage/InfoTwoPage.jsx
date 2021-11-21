import React from 'react'
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth'
import './InfoTwoStyle.scss'


export default function InfoTwoPage() {
    return (
        <>
            <div className='c-container'>
                <div className='b-image'>
                    <img className='b-image__img' src="images/logo-layout/infoTwoImg.png" alt="logo" />
                </div>
                <div className='b-info'>
                    <p className='b-info__content'>Crear eventos únicos para  interactuar con los cantidatos desde cualquier lugar</p>
                </div>
                <div className='b-button-two'>
                    <ButtonLigth></ButtonLigth>
                </div>
            </div>
        </>
    )
}
