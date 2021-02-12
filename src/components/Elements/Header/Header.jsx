import React from 'react';
import { withTranslation } from 'react-i18next';
// import { useTranslation } from 'react-i18next';
import './header.scss';
import Languages from './Languages';

const Header = (props) => {
    //const { t } = useTranslation();
    const { t } = props;
    return (
        <div className='header'>
            <Languages />
            {t('THIS IS HEADER!!!')}
        </div>
    )
}

export default withTranslation()(Header);