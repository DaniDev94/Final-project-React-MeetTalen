import React, { useState } from 'react'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import InfoOnePage from './pages/InfoOnePage/InfoOnePage';
import { Helmet } from 'react-helmet';


export default function HomeCarouselPage() {

    return (
        <>
            <Helmet>
                <style>{'body { background-color: #0d202a; }'}</style>
            </Helmet>
            <Carousel autoPlay={true}>
                <div>
                    <WelcomePage></WelcomePage>
                </div>
                <div>
                    <InfoOnePage></InfoOnePage>
                </div>

            </Carousel>
        </>
    )
}
