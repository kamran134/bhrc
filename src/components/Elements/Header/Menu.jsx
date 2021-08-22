import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoEn } from '../../../assets/images/BHRC_logo_horizontal_en.svg';
import Navigation from './Navigation';

const Menu = ({showWhite}) => {
    const { t } = useTranslation();
    
    return (
        <div className={showWhite ? 'white-menu menu' : 'menu'}>
            <div className='menu__logo'>
                <Link to='/'><LogoEn /></Link>
            </div>
            <MenuElement url='/' label={t("Home")} />
            <MenuElement url='/about' label={t("About us")} />
            <MenuElement url='/activities' label={t("Activity")} />
            {/* <MenuElement url='/urbanica' label={t("Urbanica")} _className='urbanica-menu' /> */}
            <MenuElement url='/resources' label={t("Resources")} />
            <Navigation />
        </div>
    )
}

const MenuElement = ({url, submenu, label, _className}) => {
    if (!submenu) return (
        <div className={'menu__element ' + _className}>
            <Link to={url}>{label}</Link>
        </div>
    ); else return (
        <div className={'menu__element ' + _className}>
            <Link to={url}>{label} </Link>
        </div>
    );
}

export default Menu;