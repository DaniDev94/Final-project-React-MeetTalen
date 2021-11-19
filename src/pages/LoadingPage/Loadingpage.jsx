import React from 'react';
import { Loading } from '../../components/Loading/Loading'
import { Helmet } from 'react-helmet';
import './LoadingStyle.scss';

export default function Loadingpage() {
    return (
        <>
            <Helmet>
                <style>{'body { background-color: #0d202a; }'}</style>
            </Helmet>
            <div className='c-loadin'>
                <div className='c-loadin__load'>
                    <Loading></Loading>
                </div>
                <div className='c-loadin__img'>
                    <img src="images/logo-layout/group7.png" alt="Logo" />
                </div>
            </div>
        </>
    )
}

