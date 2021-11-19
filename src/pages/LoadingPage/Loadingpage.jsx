import React, { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading/Loading'
import { Helmet } from 'react-helmet';
import LoginPage from '../UserPages/pages/LoginPage/LoginPage';
import './LoadingStyle.scss';

export default function Loadingpage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    })
    return (
        <>
            <Helmet>
                {isLoading ? <style>{'body { background-color: #0d202a; }'}</style>
                    : <style>{'body { background-color: white; }'}</style>}
            </Helmet>
            {isLoading ?
                <div className='c-loadin'>
                    <div className='c-loadin__load'>
                        <Loading></Loading>
                    </div>
                    <div className='c-loadin__img'>
                        <img src="images/logo-layout/group7.png" alt="Logo" />
                    </div>
                </div>
                : <LoginPage></LoginPage>}
        </>
    )
}

