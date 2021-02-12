import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            {t('This is FOOTER!')}
        </div>
    )
}

export default Footer;