import React from 'react';
import { ReactComponent as UrbanicaLeft } from '../../../assets/images/urbanica-left.svg';
import { ReactComponent as UrbanicaRight } from '../../../assets/images/urbanica-right.svg';
import { ReactComponent as UrbanicaLogo } from '../../../assets/images/urbanica-logo.svg';
import './urbanicaHeader.scss';

const UrbanicaHeader = () => {
    return (
        <div className='urbanica-header'>
            <div className='urbanica-header__left'>
                <UrbanicaLeft />
                <div className='urbanica-header__sign-up'>
                    <button className='urbanica-btn sign-up'>Sign up</button>
                </div>
            </div>
            <div className='urbanica-header__right'>
                <UrbanicaRight />
            </div>
            <div className='urbanica-header__logo'>
                <UrbanicaLogo />
            </div>
        </div>
    )
}

export default UrbanicaHeader;