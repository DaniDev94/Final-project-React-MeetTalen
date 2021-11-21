import React from 'react';
import './WelcomeStyle.scss';
import ButtonLigth from '../../../../components/ButtonLigth/ButtonLigth';


export default function WelcomePage() {
    return (
        <>
        <div>
            <div className='c-container'>
                <div className='b-logo'>
                    <img className='b-logo__img'src="images/logo-layout/logo@2x.png" alt="logo" />
                </div>
                <div className='b-title'>
                    <h2 className='b-title__text'>Nos encanta verte por</h2>
                </div>
                <div className='b-title-logo'>
                    <img className='b-title-logo__img' src="images/logo-layout/title@7.png" alt="title-logo" />
                </div>
                <div className='b-paragraph'>
                    <p className='b-paragraph__text'>Atrae y enamora a los mejores candidatos</p>
                </div>
                <div className='b-btn'>
                    <ButtonLigth></ButtonLigth>
                </div>
            </div>
        </div>
        </>
    )
}
