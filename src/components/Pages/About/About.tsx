import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ZahaHadit from '../../../assets/images/bhrc_7.JPG';
import Fontan from '../../../assets/images/bhrc_3.JPG';
import './about.scss';

const About: FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className='about'>
            <div className='container'>
                <div className='container-inner centered'>
                    <h1 className='main-blue-text about'>Who are we?</h1>
                    <h2 className='about-subtitle'>Konin wansis dolor sit amet</h2>
                </div>
                <div>
                    <p>
                        Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </div>
                <div className='about__images'>
                    <img src={ZahaHadit} alt='Zaha Hadit' />
                    <img src={Fontan} alt='Fontan' />
                </div>
                <div className='container-inner centered'>
                    <h1 className='main-blue-text about'>About us</h1>
                    <h2 className='about-subtitle'>Konin wansis dolor sit amet</h2>
                </div>
                <div>
                    <p>
                        Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;