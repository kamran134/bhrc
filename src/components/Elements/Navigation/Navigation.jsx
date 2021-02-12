import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './navigation.scss';

const Navigation = () => {
    const { t } = useTranslation();
    return (
        <div className='navigation'>
            <div className='container'>
                <div className='container-inner'>
                    <Link to='/'>{t('Main')}</Link>
                    <Link to='/about'>{t('About us')}</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;