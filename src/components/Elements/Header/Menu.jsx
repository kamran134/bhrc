import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoEn } from '../../../assets/images/BHRC_logo_horizontal_en.svg';
import Navigation from './Navigation';

const Menu = () => {
    const { t } = useTranslation();
    return (
        <div className='menu'>
            <div className='menu__logo'>
                <LogoEn />
            </div>
            <MenuElement url='/activity' label={t('Activity')} />
            <MenuElement url='/recources' label={t('Recources')} />
            <MenuElement url='/urbanica' label={t('Urbanica')} />
            <MenuElement url='/contact' label={t('Contact')} />
            <MenuElement url='/help' label={t('Help')} />
            <Navigation />
        </div>
    )
}

const MenuElement = ({url, submenu, label}) => {
    if (!submenu) return (
        <div className='menu__element'>
            <Link to={url}>{label}</Link>
        </div>
    ); else return (
        <div className='menu__element'>
            <Link to={url}>{label} </Link>
        </div>
    );
}

export default Menu;
