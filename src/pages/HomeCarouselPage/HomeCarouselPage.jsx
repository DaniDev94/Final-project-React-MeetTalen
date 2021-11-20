import React from 'react'
import './HomeCarouselStyle.scss'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function HomeCarouselPage() {
    return (
        <div>
            <Carousel className='control-dots carousel-status dot selected'  showArrows={false}>
                <div>
                <WelcomePage></WelcomePage>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </Carousel>
        </div>
    )
}
